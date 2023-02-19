import { LoginComponent } from './login.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from './login-form/login-form.component';



@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
  ],
  exports: [LoginComponent]
})
export class LoginModule { }
