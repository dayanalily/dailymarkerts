import { Observable, Subject, from, throwError } from 'rxjs';
import { map, catchError, tap, switchMap } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { AuthService } from 'ngx-auth';
import swal from 'sweetalert2';
import { AccessData } from '../../../../core/auth/access-data';
import { Usuario } from '../../../../core/interfaces/usuario';
import { AuthFakeDb } from '../../../../fake-api/fake-db/auth';
import { TokenStorage } from '../../../../core/auth/token-storage.service';
import { UtilsService } from '../../../../core/services/utils.service';
import { environment } from '../../../../../environments/environment';
 

@Injectable({
  providedIn: 'root'
})
export class IndexService {
  // API_URL_BASE = 'http://localhost:8081/api/';
  API_URL_BASE = environment.URL_BASE_PRODUCCION  + '/api/'; 
  API_ENDPOINT_LISTAR = 'usuario/listar';
  API_ENDPOINT_ELIMINAR = 'usuario/';
  API_ENDPOINT_LISTAR_PAGINACION = 'usuario/page/';
  credential: Credential
  public onCredentialUpdated$: Subject<AccessData>;
  public _usuario: Usuario;
  public AuthFakeDb: AuthFakeDb;
  public _token: string;
  constructor(
    private http: HttpClient,
    private tokenStorage: TokenStorage,
    private util: UtilsService,
  ) {
    this.onCredentialUpdated$ = new Subject();

  }

  /**
	 * Function, that should perform refresh token verifyTokenRequest
	 * @description Should be successfully completed so interceptor
	 * can execute pending requests or retry original one
	 * @returns {Observable<any>}
	 */
  public listarPaginacion(id): Observable<any> {
    // dummy token creation
    this.credential = Object.assign({}, this.credential, {
      accessToken: 'access-token-' + Math.random(),
      refreshToken: 'access-token-' + Math.random(),

    });
    return this.http.get<AccessData>(this.API_URL_BASE + this.API_ENDPOINT_LISTAR_PAGINACION + id);

  }
  /**
	 * Function, that should perform refresh token verifyTokenRequest
	 * @description Should be successfully completed so interceptor
	 * can execute pending requests or retry original one
	 * @returns {Observable<any>}
	 */
  public listarUsuariosRegistrados(): Observable<any> {
    // dummy token creation
    this.credential = Object.assign({}, this.credential, {
      accessToken: 'access-token-' + Math.random(),
      refreshToken: 'access-token-' + Math.random(),

    });
    return this.http.get<AccessData>(this.API_URL_BASE + this.API_ENDPOINT_LISTAR);

  }

  listarPrueba() {
    return this.http.get<any>('https://jsonplaceholder.typicode.com/todos');

  }

  eliminarUsuario(id) {
    // dummy token creation
    this.credential = Object.assign({}, this.credential, {
      accessToken: 'access-token-' + Math.random(),
      refreshToken: 'access-token-' + Math.random(),
    });
    return this.http.delete<AccessData>(this.API_URL_BASE + this.API_ENDPOINT_ELIMINAR + id);

  }
}
