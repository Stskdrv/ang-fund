import { RegistrationComponent } from './registration.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [RegistrationComponent],
  imports: [
    CommonModule
  ],
  exports: [RegistrationComponent]
})
export class RegistrationModule { }
