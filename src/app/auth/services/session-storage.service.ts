import { Injectable, Inject, InjectionToken } from '@angular/core';

export const WINDOW_TOKEN = new InjectionToken<Window>('Window object');

@Injectable({
  providedIn: 'root'
})
export class SessionStorageService {

  constructor(@Inject(WINDOW_TOKEN) private window: Window) { }
  
  setToken(token: string): void {
    this.window.sessionStorage.setItem('token', token);
  }

  getToken(): string {
    return this.window.sessionStorage.getItem('token');
  }

  deleteToken(): void {
    this.window.sessionStorage.removeItem('token');
  }
  
}
