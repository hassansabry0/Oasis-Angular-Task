import { HomeService } from './../../home/home.service';
import { ProductsListService } from './../products-list.service';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/models/product';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css'],
})
export class ProductsListComponent implements OnInit {
  products!: Product[];
  isLoading: boolean = true;

  // pagination
  totalLength!: number;
  page: number = 1;

  constructor(
    private _ProductsListService: ProductsListService,
    private _HomeService: HomeService
  ) {}
  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts() {
    this._ProductsListService.getAllProducts().subscribe({
      next: (response) => {
        this.products = response.products;
        this.isLoading = false;
        this.totalLength = this.products.length;
      },
      error: (error) => {
        console.log(error);
        this.isLoading = false;
        alert(error.message);
      },
    });
  }
  delete(event: any) {
    this._HomeService.deleteProduct(event.id).subscribe({
      next: (response) => {
        if (response.deletedOn) {
          this.products.forEach((element, index, array) => {
            if (element.id === response.id) {
              array.splice(index, 1);
              alert('Deleted Success');
            }
          });
        }
      },
      error: (error) => {
        console.log(error);
        alert(error.message);
      },
    });
  }
}
