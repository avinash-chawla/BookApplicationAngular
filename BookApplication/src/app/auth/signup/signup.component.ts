import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from './../auth.service';
import { Auth } from './../auth.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  errorMsg: string;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  onSignup(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.authService.CreateUser(form.value).subscribe(
      (response) => {
        this.router.navigate(['/list']);
      },
      (error) => {
        this.errorMsg = error.error;
      }
    );
  }
}
