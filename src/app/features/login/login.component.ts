import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {
  loginForm!: FormGroup;
  email!: string;
  password!: string;

  submitted = false;



  onSubmit() {
    this.submitted = true;
    if (this.loginForm.valid) {
      () => console.log('vadid, yeey');
      
    }
  }
}

