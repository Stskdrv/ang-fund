import {DOCUMENT} from '@angular/common';
import { Injectable, Inject} from '@angular/core';



@Injectable({
  providedIn: 'root'
})
  

export class SessionStorageService {
  private window: Window;

  constructor(@Inject(DOCUMENT) private document: Document) {
    this.window = this.document.defaultView;
    if (!this.window ) {
      throw new Error('Window is not available');
    }
  };

  // Here I created an instance variable window in the SessionStorageService constructor by accessing the defaultView property of the injected Document object. Code will throw an error if this entity is not available.

  // By using the @Inject decorator with the DOCUMENT token, I can directly access the Document object without the need for a separate injection token. This simplifies the code and removes InjectionToken and inject function from prev version of silution.
  
  setToken(token: string): void {
    this.window.sessionStorage.setItem('token', token);
  };

  getToken(): string {
    return this.window.sessionStorage.getItem('token');
  };

  deleteToken(): void {
    this.window.sessionStorage.removeItem('token');
  };
  
};
