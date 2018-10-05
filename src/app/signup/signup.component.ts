import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'user-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})

export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  errorMessage: string = '';
  signUpFormEmail;
  signUpFormPassword;

  constructor(
    public authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
  }

  trySignup(value) {
    this.authService.doSignup(value)
    .then(res => {
      console.log(res);
      this.errorMessage = '';
      this.router.navigate(['/dashboard']);
    }, err => {
      console.log(err);
      this.errorMessage = err.message;
    })
  }

}
