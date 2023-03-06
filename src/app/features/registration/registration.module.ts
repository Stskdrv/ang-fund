import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RegistrationComponent } from './registration.component';
import { SharedModule } from 'src/app/shared/shared.module';

const routes: Routes = [
  { path: '', component: RegistrationComponent }
];

@NgModule({
  declarations: [
    RegistrationComponent,
    RegistrationFormComponent,
  ],
  imports: [
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    FormsModule,
    SharedModule
  ],
  exports: [
    RouterModule,
    RegistrationComponent,
    RegistrationFormComponent,
  ]
})
export class RegistrationRoutingModule { }
