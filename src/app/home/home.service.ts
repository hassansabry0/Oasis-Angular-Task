import { environment } from './../../environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor(private _HttpClint: HttpClient) {}
  getLimitedProducts(skip: number, limit: number): Observable<any> {
    return this._HttpClint.get(
      `${environment.baseApi}products?skip=${skip}&limit=${limit}`
    );
  }
  deleteProduct(id: number): Observable<any> {
    return this._HttpClint.delete(`${environment.baseApi}products/${id}`);
  }
}
