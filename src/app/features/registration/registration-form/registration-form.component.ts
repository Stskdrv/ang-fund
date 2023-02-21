import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
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
      emailValidator()
    ]),
    password: new FormControl('', [
      Validators.required
    ])
  });
  successMessage!: string;
  errorMessage!: string;

  getErrorMessage(field: string): string {
    if (this.regForm.get(field)!.hasError('required')) {
      return 'This field is required.';
    } else if (this.regForm.get(field)!.hasError('minlength')) {
      const requiredLength = this.regForm.get(field)!.errors!['minlength'].requiredLength;
      return `This field must be at least ${requiredLength} characters long.`;
    } else if (this.regForm.get(field)!.errors?.['invalidEmail']) {
      return 'Please enter a valid email address.';
    } else {
      return '';
    }
  }
  
  onSubmit(): void {    
    if (this.regForm.valid) {
      this.successMessage = 'Registration successful!';
      this.errorMessage = '';
      alert(JSON.stringify(this.regForm.value, null, 2));
    } else {
      this.successMessage = '';
      this.errorMessage = 'Please fill out all required fields.';
    }
  }
 }
