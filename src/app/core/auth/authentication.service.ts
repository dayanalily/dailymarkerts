import { Observable, Subject, from, throwError } from 'rxjs';
import { map, catchError, tap, switchMap } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { AuthService } from 'ngx-auth';
import swal from 'sweetalert2';
import { TokenStorage } from './token-storage.service';
import { UtilsService } from '../services/utils.service';
import { AccessData } from './access-data';
import { Credential } from './credential';
import { Usuario } from '../interfaces/usuario';
import { AuthFakeDb } from '../../fake-api/fake-db/auth';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';

@Injectable()
export class AuthenticationService implements AuthService {
	API_URL = environment.URL_BASE_PRODUCCION + '/send/email';
	API_URL_BASE = environment.URL_BASE_PRODUCCION + '/api/';
	API_ENDPOINT_LOGIN = environment.URL_BASE_PRODUCCION +'/oauth/token'; 

	API_ENDPOINT_REFRESH = '/refresh';
	API_ENDPOINT_REGISTER = 'usuario/registrar';
	credential: Credential
	public onCredentialUpdated$: Subject<AccessData>;
	public _usuario: Usuario;
	public AuthFakeDb: AuthFakeDb;
	public _token: string;
	constructor(
		private router: Router,
		private http: HttpClient,
		private tokenStorage: TokenStorage,
		private util: UtilsService,
	) {
		this.onCredentialUpdated$ = new Subject();

	}

	/**
	 * Check, if user already authorized.
	 * @description Should return Observable with true or false values
	 * @returns {Observable<boolean>}
	 * @memberOf AuthService
	 */
	public isAuthorized(): Observable<boolean> {
		return this.tokenStorage.getAccessToken().pipe(map(token => !!token));
	}

	/**
	 * Get access token
	 * @description Should return access token in Observable from e.g. localStorage
	 * @returns {Observable<string>}
	 */
	public getAccessToken(): Observable<string> {
		return this.tokenStorage.getAccessToken();
	}

	/**
	 * Get user roles
	 * @returns {Observable<any>}
	 */
	public getUserRoles(): Observable<any> {
		return this.tokenStorage.getUserRoles();
	}

	/**
	 * Function, that should perform refresh token verifyTokenRequest
	 * @description Should be successfully completed so interceptor
	 * can execute pending requests or retry original one
	 * @returns {Observable<any>}
	 */
	public refreshToken(): Observable<AccessData> {
		return this.tokenStorage.getRefreshToken().pipe(
			switchMap((refreshToken: string) => {
				return this.http.get<AccessData>(this.API_URL + this.API_ENDPOINT_REFRESH + '?' + this.util.urlParam(refreshToken));
			}),
			tap(this.saveAccessData.bind(this)),
			catchError(err => {
				this.logout();
				return throwError(err);
			})
		);
	}

	/**
	 * Function, checks response of failed request to determine,
	 * whether token be refreshed or not.
	 * @description Essentialy checks status
	 * @param {Response} response
	 * @returns {boolean}
	 */
	public refreshShouldHappen(response: HttpErrorResponse): boolean {
		return response.status === 401;
	}

	/**
	 * Verify that outgoing request is refresh-token,
	 * so interceptor won't intercept this request
	 * @param {string} url
	 * @returns {boolean}
	 */
	public verifyTokenRequest(url: string): boolean {
		return url.endsWith(this.API_ENDPOINT_REFRESH);
	}

	/**
	 * Submit login request
	 * @param {Credential} credential
	 * @returns {Observable<any>}
	 */
	public login(credential: Credential): Observable<any> {


		const credenciales = btoa('angularapp' + ':' + '12345');

		const httpHeaders = new HttpHeaders({
			'Content-Type': 'application/x-www-form-urlencoded',
			'Authorization': `Basic ${credenciales}` // 'Basic ' + credenciales
		});

		let params = new URLSearchParams();
		params.set('grant_type', 'password');
		params.set('username', credential.email);
		params.set('password', credential.password);




		return this.http.post<any>(
			this.API_ENDPOINT_LOGIN,
			params.toString(), { headers: httpHeaders }).pipe(
				map((result: any) => {

					if (result instanceof Array) {
						return result.pop();
					}

					const payload = this.obtenerDatosToken(result.access_token)

					if (payload !== undefined) {
						result = Object.assign(result, { roles: payload.authorities });

						this.guardarUsuario(result.access_token);
					}
					return result;

				}),
				tap(this.saveAccessData.bind(this)),
				catchError(this.handleError('login', []))
			);
	}

	/**
	 * Handle Http operation that failed.
	 * Let the app continue.
	 * @param operation - name of the operation that failed
	 * @param result - optional value to return as the observable result
	 */
	private handleError<T>(operation = 'operation', result?: any) {
		return (error: any): Observable<any> => {
			// TODO: send the error to remote logging infrastructure
			if (error.error.mensaje === undefined) {
				swal.fire(error.error.error, error.error.error_description, 'error');

			} else {
				swal.fire(error.error.mensaje, 'error');

			}

			// Let the app keep running by returning an empty result.
			return from(result);
		};
	}

	/**
	 * Logout
	 */
	public logout(refresh?: boolean): void {
		this.tokenStorage.clear();
		sessionStorage.clear();
		if (refresh) {
			this.router.navigate(['login'])
			//location.reload(true);
			this._token = undefined
		}

	}

	/**
	 * Save access data in the storage
	 * @private
	 * @param {AccessData} data
	 */
	private saveAccessData(accessData: AccessData) {

		if (typeof accessData !== 'undefined') {
			this.tokenStorage
				.setAccessToken(accessData.access_token)
				.setRefreshToken(accessData.refresh_token)
				.setUserRoles(accessData.roles);
			this.onCredentialUpdated$.next(accessData);

		}
	}

	/**
	 * Submit registration request
	 * @param {Credential} credential
	 * @returns {Observable<any>}
	 */
	public register(user: Usuario): Observable<any> {
		// dummy token creation

		const credenciales = btoa('angularapp' + ':' + '12345');

		const httpHeaders = new HttpHeaders({
			'Content-Type': 'application/json',
			'Authorization': `Basic ${credenciales}` // 'Basic ' + credenciales
		});


		return this.http.post(this.API_URL_BASE + this.API_ENDPOINT_REGISTER, user, { headers: httpHeaders })
			.pipe(catchError(this.handleError('register', []))
			);
	}

	/**
	 * Submit forgot password request
	 * @param {Credential} credential
	 * @returns {Observable<any>}
	 */
	public requestPassword(credential: Credential): Observable<any> {
		return this.http.post(this.API_URL, credential)
			.pipe(catchError(
				this.handleError('forgot-password', []))

			);

	}

	public get token(): string {
		if (this._token != undefined) {
			return this._token;
		} else if (this._token == undefined && localStorage.getItem('accessToken') != null) {
			this._token = localStorage.getItem('accessToken');
			return this._token;
		}
		return null;
	}


	isAuthenticated(): boolean {
		if (this._token != undefined) {
			this._token;
		} else if (this._token == undefined && localStorage.getItem('accessToken') != null) {
			this._token = localStorage.getItem('toaccessTokenken');
			this._token;
		}
		let payload = this.obtenerDatosToken(this.token);
		if (payload != null && payload.user_name && payload.user_name.length > 0) {

			this.guardarUsuario(this._token);
			return true;
		}
		return false;
	}

	obtenerDatosToken(accessToken: string): any {
		if (accessToken != null) {
			return JSON.parse(atob(accessToken.split(".")[1]));
		}
		return null;
	}
	guardarUsuario(accessToken: string): void {

		let payload = this.obtenerDatosToken(accessToken);
		this._usuario = new Usuario();
		this._usuario.id = payload.id
		this._usuario.nombre = payload.nombre;
		this._usuario.apellido = payload.apellido;
		this._usuario.email = payload.email;
		this._usuario.email = payload.email;
		this._usuario.roles = payload.authorities;
		this._usuario.foto = payload.foto;
		sessionStorage.setItem('usuario', JSON.stringify(this._usuario));
	}

	listarUsuarioID(id) {
		return this.http.get(this.API_URL_BASE + 'usuario/' + id)
			.pipe(catchError(
				this.handleError('forgot-password', []))

			);
	}

	actualizarUsuario(event, id) {

		return this.http.put(this.API_URL_BASE + 'usuario/' + id, event)
			.pipe(catchError(
				this.handleError('forgot-password', []))

			);
	}
}
