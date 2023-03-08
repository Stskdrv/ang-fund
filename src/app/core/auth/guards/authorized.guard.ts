import { Injectable } from '@angular/core';
import { CanLoad, Router, UrlTree } from '@angular/router';

import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { AuthService } from '../services/auth.service';


@Injectable()
  
  
export class AuthorizedGuard implements CanLoad {
  constructor(private authService: AuthService, private router: Router) { }

  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    return this.authService.isAuthorized$.pipe(
      map((isAuthorized) => isAuthorized ?
        true :
        this.router.parseUrl('/login')
      )
    );
  }

  canLoad(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    return this.authService.isAuthorized$.pipe(
      map((isAuthorized) => isAuthorized ?
        true :
        this.router.parseUrl('/login')
      )
    // Here, the tap operator is used to perform a side effect (i.e., navigating to the login page) when the isAuthorized$    observable emits a false value. 
    // The tap operator doesn't modify the observable stream itself, but allows you to perform an action on each emitted value.
    // correstion: 
      //tap() will not work as expected because it does not return any value.
      //I should use map() instead, which transforms the value emitted by the isAuthorized$ observable into a boolean value.
    );
  }
};
