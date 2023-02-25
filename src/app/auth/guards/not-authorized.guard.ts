import { Injectable } from '@angular/core';
import { CanLoad, CanActivate, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { SessionStorageService } from '../services/session-storage.service';

@Injectable({
  providedIn: 'root'
})
export class NotAuthorizedGuard implements CanActivate {

  constructor(private authService: AuthService, private sessionStorageService: SessionStorageService, private router: Router) {}

  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return (!this.authService.isAuthorized$ ?
      true :
      this.router.parseUrl('/courses'));
  }
  
}
