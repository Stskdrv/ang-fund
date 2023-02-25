import { Injectable } from '@angular/core';
import { CanLoad, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { SessionStorageService } from '../services/session-storage.service';


@Injectable({
  providedIn: 'root'
})
  
  
export class AuthorizedGuard implements CanLoad {
  constructor(private authService: AuthService, private sessionStorageService: SessionStorageService, private router: Router) {}

  canLoad(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    return (this.authService.isAuthorized$ ?
      true :
      this.router.parseUrl('/login'));
  };
  
};
