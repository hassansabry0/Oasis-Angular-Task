import { Component, OnInit } from '@angular/core';

import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  isLogin: boolean = false;

  title = 'oasis-angular-task';
  constructor(private _AuthService: AuthService) {}
  ngOnInit(): void {
    this._AuthService.userData.subscribe({
      next: () => {
        this._AuthService.userData.getValue() !== null
          ? (this.isLogin = true)
          : (this.isLogin = false);
      },
    });
  }
}
