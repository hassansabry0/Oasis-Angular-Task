import { environment } from './../../environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductDetailsService {
  constructor(private _HttpClint: HttpClient) {}
  getProductById(id: number): Observable<any> {
    return this._HttpClint.get(`${environment.baseApi}products/${id}`);
  }
}
