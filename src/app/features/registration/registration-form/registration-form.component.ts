import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { emailValidator } from 'src/app/shared/utils/email-validator';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss'],
})
export class RegistrationFormComponent {
  regForm = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(6)
    ]),
    email: new FormControl('', [
      Validators.required,
      emailValidator
    ]),
    password: new FormControl('', [
      Validators.required
    ])
  });
  

  onSubmit(): void {
    console.log(this.regForm.value);
  }
 }
