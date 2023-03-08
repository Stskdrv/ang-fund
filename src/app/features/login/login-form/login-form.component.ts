import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
  
  
export class LoginFormComponent implements OnInit {
  email!: string;
  password!: string;

  successMessage!: string;
  errorMessage!: string;


  constructor() { }

  ngOnInit() {
  }

  onSubmit(loginForm: NgForm) {
    if (loginForm.valid) {
      this.successMessage = 'Login successful!';
      this.errorMessage = '';
      alert(JSON.stringify(loginForm.value, null, 2));
    } else {
      this.successMessage = '';
      this.errorMessage = 'Please fill out all required fields.';
    }
  }
}
