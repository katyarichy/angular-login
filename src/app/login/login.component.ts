import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service'
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'user-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  errorMessage: string = '';
  loginFormEmail;
  loginFormPassword;

  constructor(
    public authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  tryLogin(value){
    this.authService.doLogin(value)
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
