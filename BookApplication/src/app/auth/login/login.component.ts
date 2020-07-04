import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from './../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  errorMsg: string;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  onLogin(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.authService.loginUser(form.value.email, form.value.password).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        this.errorMsg = error.error;
        console.log(error);
      }
    );
  }
}
