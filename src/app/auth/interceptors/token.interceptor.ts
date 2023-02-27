
import { AuthService } from './../services/auth.service';
import { SessionStorageService } from './../services/session-storage.service';
import { Inject, Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

// @Injectable()
// export class TokenInterceptor implements HttpInterceptor {
//   constructor(@Inject(SessionStorageService) private SessionStorageService: SessionStorageService) {}

//   intercept(req: HttpRequest<any>, next: HttpHandler) {
//     const authToken = this.SessionStorageService.getToken();
//     if (authToken) {
//       const authReq = req.clone({
//         headers: req.headers.set('Authorization', `Bearer ${authToken}`)
//       });
//       return next.handle(authReq);
//     }
//     return next.handle(req);
//   }
// }

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  AuthService: any;
  constructor(@Inject(SessionStorageService) private SessionStorageService: SessionStorageService, private router: Router) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.SessionStorageService.getToken();

    if (token) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
    }

    return next.handle(request).pipe(
      catchError((error) => {
        if (error.status === 401) {
          this.AuthService.logout();
          this.router.navigate(['/login']);
        }

        return throwError(() => error);
      })
    );
  }
}