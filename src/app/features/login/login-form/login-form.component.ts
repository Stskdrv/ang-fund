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

  constructor() { }

  ngOnInit() {
  }

  onSubmit(loginForm: NgForm) {
    alert(JSON.stringify(loginForm.value, null, 2));
  }
}
