import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { SessionStorageService } from './session-storage.service';
import { BASE_URL } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthorized$$ = new BehaviorSubject<boolean>(false);
  public isAuthorized$ = this.isAuthorized$$.asObservable();

  constructor(
    private http: HttpClient,
    private sessionStorageService: SessionStorageService
  ) { }
  
  login(name: string, email: string, password: string): Observable<any> {
    return this.http.post<AuthResponse>(`${BASE_URL}/api/login`, { name, email, password }).pipe(
      tap(response => {
        this.sessionStorageService.setToken(response.token);
        this.isAuthorized$$.next(true);
      })
    );
  }

  logout(): Observable<any> {
    return this.http.post(`${BASE_URL}/api/logout`, {}).pipe(
      tap(() => {
        this.sessionStorageService.deleteToken();
        this.isAuthorized$$.next(false);
      })
    );
  }

  register(
    name: string,
    email: string,
    password: string,
  ): Observable<any> {
    return this.http.post(`${BASE_URL}/api/register`, {
      name,
      email,
      password
    });
  }
}

interface AuthResponse {
  token: string;
}