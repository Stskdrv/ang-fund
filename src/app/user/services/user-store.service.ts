import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
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

  getUser(): void {
    this.userService.getUser().subscribe((user) => {
      this.name$$.next(user.name);
      this.isAdmin$$.next(user.isAdmin);
    });
  }
}