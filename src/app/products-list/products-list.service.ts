import { environment } from './../../environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductsListService {
  constructor(private _HttpClint: HttpClient) {}
  getAllProducts(): Observable<any> {
    return this._HttpClint.get(`${environment.baseApi}products`);
  }
}
