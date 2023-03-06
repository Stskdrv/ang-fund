import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RegistrationComponent } from './registration.component';

const routes: Routes = [
  { path: '', component: RegistrationComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    ReactiveFormsModule,
  
  ],
  exports: [RouterModule]
})
export class RegistrationRoutingModule { }
