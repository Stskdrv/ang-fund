import { Injectable } from '@angular/core';
import { CanActivate, UrlTree, Router } from '@angular/router';

import { Observable, tap } from 'rxjs';

import { AuthService } from '../services/auth.service';

@Injectable()
  
  
export class NotAuthorizedGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.authService.isAuthorized$.pipe(
      tap((isAuthorized) => !isAuthorized ?
        true :
        this.router.parseUrl('/courses'))
    )
  }

  // Here, the tap operator is used to perform a side effect (i.e., navigating to the courses page) when the isAuthorized$ observable emits a false value. 
  // The tap operator doesn't modify the observable stream itself, but allows you to perform an action on each emitted value.
  
}
