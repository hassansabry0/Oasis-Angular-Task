import { AuthService } from './../auth.service';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  errorMessage: string = '';
  isLoading: boolean = false;

  loginForm: FormGroup = new FormGroup({
    username: new FormControl(null, [Validators.required]),
    password: new FormControl(null, [Validators.required]),
  });
  constructor(private _AuthService: AuthService, private _Router: Router) {}

  submitLoginForm(loginForm: FormGroup) {
    this.isLoading = true;
    if (loginForm.valid) {
      this._AuthService.login(loginForm.value).subscribe({
        // data sent
        next: (response) => {
          if (response.token) {
            // data sent
            this.isLoading = false;
            this._Router.navigate(['/home']);
            console.log(response);
            localStorage.setItem('oasisToken', response.token);
            this._AuthService.getUserData();
            this.errorMessage = '';
          }
        },
        // data not sent
        error: (error) => {
          this.isLoading = false;
          this.errorMessage = 'Incorrect username or password';
        },
      });
    }
  }
}
