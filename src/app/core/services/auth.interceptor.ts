import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import swal from 'sweetalert2';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AuthenticationService } from '../auth/authentication.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: AuthenticationService,
    private router: Router) { }

  intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {


    return next.handle(req).pipe(
      catchError(e => {
        if (e.status == 401) {
          if (this.authService.isAuthenticated()== true) { this.router.navigate(['/dayana']);
          }else{
            this.authService.logout();
          }
        }

        if (e.status == 403) {
          swal.fire('Acceso denegado', `Hola no tienes acceso a este recurso!`, 'warning');
          this.router.navigate(['/']);
        }
        return throwError(e);
      })
    );
  }
}
