import { Component } from '@angular/core';

import { AuthService } from 'src/app/auth/auth.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  constructor(private _AuthService: AuthService) {}
  logout() {
    localStorage.removeItem('oasisToken');
    this._AuthService.userData.next(null);
    console.log(this._AuthService.userData.getValue());
  }
}
