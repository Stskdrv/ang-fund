import { Injectable } from '@angular/core';
import { BehaviorSubject, tap, Observable } from 'rxjs';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class UserStoreService {
  private name$$ = new BehaviorSubject<string>(null);
  private isAdmin$$ = new BehaviorSubject<boolean>(false);

  public readonly name$ = this.name$$.asObservable();
  public readonly isAdmin$ = this.isAdmin$$.asObservable();

  constructor(private userService: UserService) {}

  getUser(): Observable<any> {
    return this.userService.getUser().pipe(
      tap(user => {
        this.name$$.next(user.name);
        this.isAdmin$$.next(user.role === 'admin');
      })
    );
  }
}

//here I'm  returning the Observable from the getUser() method instead of subscribing to it - using the tap operator from RxJS to execute some code, updating the name$$ and isAdmin$$ BehaviorSubjects) when the Observable emits a value.

// With this approach, the component that uses the getUser() method can subscribe to the Observable and handle the emitted values or errors. This approach is more flexible because the component can decide when to subscribe and unsubscribe from the Observable, which can help prevent memory leaks and improve performance.