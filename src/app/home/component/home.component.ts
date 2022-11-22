import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/models/product';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  products!: Product[];
  isLoading: boolean = true;
  constructor(private _HomeService: HomeService) {}

  ngOnInit(): void {
    this.getSixProducts();
  }

  getSixProducts() {
    this._HomeService.getLimitedProducts(0, 6).subscribe({
      next: (response) => {
        this.products = response.products;
        this.isLoading = false;
      },
      error: (error) => {
        this.isLoading = true;
        console.log(error);
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
