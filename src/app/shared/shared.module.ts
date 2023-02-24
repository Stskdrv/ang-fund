import { EmailValidatorDirective } from './directives/email-validator.directive';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './components/modal/modal.component';
import {
  HeaderComponent,
  ButtonComponent,
  InfoComponent,
} from "./components";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { PipesModule } from './pipes/pipes.module';
const components = [
  HeaderComponent,
  ButtonComponent,
  InfoComponent,
  ModalComponent
];

@NgModule({
  declarations: [components, EmailValidatorDirective],
  imports: [
    CommonModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    PipesModule
  ],
  exports: [components, FormsModule, EmailValidatorDirective, PipesModule]
})
export class SharedModule { }
