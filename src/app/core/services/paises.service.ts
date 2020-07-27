import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorage } from '../auth/token-storage.service';
import { UtilsService } from './utils.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {
  API_URL_BASE = 'http://localhost:8081/api/';
  
  constructor(private router: Router,
    private http: HttpClient,
    private tokenStorage: TokenStorage,
    private util: UtilsService) { }

  listarPaises(){
  
    const credenciales = btoa('angularapp' + ':' + '12345');

    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Basic ${credenciales}` // 'Basic ' + credenciales

    });
    return this.http.get<any>(environment.URL_BASE_PRODUCCION + '/api/'+ 'registro/pais');
 
  }
}
