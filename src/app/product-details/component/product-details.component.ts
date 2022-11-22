import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product } from 'src/app/shared/models/product';
import { ProductDetailsService } from '../product-details.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  id!: number;
  product!: Product;
  isLoading: boolean = true;
  constructor(
    private _ActivatedRoute: ActivatedRoute,
    private _ProductDetailsService: ProductDetailsService
  ) {}
  ngOnInit(): void {
    this.id = Number(this._ActivatedRoute.snapshot.paramMap.get('id'));

    this.getProductById();
  }
  getProductById() {
    this._ProductDetailsService.getProductById(this.id).subscribe({
      next: (response) => {
        this.product = response;
        this.isLoading = false;
      },
      error: (error) => {
        alert(error.message);
      },
    });
  }
}
