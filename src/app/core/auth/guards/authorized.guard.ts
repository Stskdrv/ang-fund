import { Injectable } from '@angular/core';
import { CanLoad, Router, UrlTree } from '@angular/router';

import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { AuthService } from '../services/auth.service';


@Injectable()
  
  
export class AuthorizedGuard implements CanLoad {
  constructor(private authService: AuthService, private router: Router) {}

  canLoad(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    return this.authService.isAuthorized$.pipe(
      tap((isAuthorized) => isAuthorized ?
        true :
        this.router.parseUrl('/login')
      )
    // Here, the tap operator is used to perform a side effect (i.e., navigating to the login page) when the isAuthorized$    observable emits a false value. 
    // The tap operator doesn't modify the observable stream itself, but allows you to perform an action on each emitted value.

    );
  }
};
