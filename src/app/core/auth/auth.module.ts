import { AuthorizedGuard } from './guards/authorized.guard';
import { TokenInterceptor } from './interceptors/token.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './services/auth.service';
import { NotAuthorizedGuard } from './guards/not-authorized.guard';



@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    AuthService,
    NotAuthorizedGuard,
    AuthorizedGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ]
})
export class AuthModule { }
