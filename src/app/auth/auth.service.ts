import { environment } from '../../environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import jwtDecode from 'jwt-decode';

import { Login } from './models/login';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userData = new BehaviorSubject(null);

  constructor(private _HttpClient: HttpClient) {
    if (localStorage.getItem('oasisToken')) this.getUserData();
  }
  login(formData: Login): Observable<any> {
    return this._HttpClient.post(`${environment.baseApi}auth/login`, formData);
  }
  getUserData() {
    this.userData.next(
      jwtDecode(JSON.stringify(localStorage.getItem('oasisToken')))
    );
  }
}
