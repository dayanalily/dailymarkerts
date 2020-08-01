import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  // API_URL_BASE = 'http://localhost:8081/api/';
  API_URL_BASE = environment.URL_BASE_PRODUCCION + '/api/';

  API_ENDPOINT_COMPLETAR = 'usuario/completar/';
  API_ENDPOINT_LISTAR = 'usuario/';
  credential: Credential
  constructor(private httpClient: HttpClient) { }

  postFile(fileToUpload: File, id): Observable<any> {
    const endpoint = environment.URL_BASE_PRODUCCION + '/api/usuario/upload';
    const formData: FormData = new FormData();
    formData.append("archivo", fileToUpload);
    formData.append("id", id);
    const credenciales = btoa('angularapp' + ':' + '12345');

    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',

    });
    const req = new HttpRequest('POST', `${endpoint}`, formData, {
      reportProgress: true
    });

    return this.httpClient.request(req);

  }
  /**
	 * Submit forgot password request
	 * @param {Credential} credential
	 * @returns {Observable<any>}
	 */
  public completarRegistro(usuario): Observable<any> {
    return this.httpClient.put(this.API_URL_BASE + this.API_ENDPOINT_COMPLETAR + usuario.id, usuario)

  }

  listarUsuarioID(id) {
    return this.httpClient.get<any>(this.API_URL_BASE + 'usuario/' + id)
  }

}
