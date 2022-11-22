import { environment } from './../../environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SettingsService {
  constructor(private _HttpClint: HttpClient) {}

  addProduct(formValues: any): Observable<any> {
    return this._HttpClint.post(
      `${environment.baseApi}products/add`,
      formValues
    );
  }
  editProduct(formValues: any, id: number): Observable<any> {
    return this._HttpClint.put(
      `${environment.baseApi}products/${id}`,
      formValues
    );
  }
}
