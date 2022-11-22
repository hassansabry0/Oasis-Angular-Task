import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SettingsService } from '../settings.service';
import { ProductDetailsService } from 'src/app/product-details/product-details.service';
import { Product } from 'src/app/shared/models/product';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css'],
})
export class SettingsComponent implements OnInit {
  id!: string;
  addMode!: boolean;
  success: boolean = false;
  product!: Product;
  form: FormGroup = new FormGroup({
    title: new FormControl(null, Validators.required),
    price: new FormControl(null, Validators.required),
    stock: new FormControl(null, Validators.required),
    rating: new FormControl(null, Validators.required),
    description: new FormControl(null, Validators.required),
    brand: new FormControl(null, Validators.required),
    category: new FormControl(null, Validators.required),
  });

  constructor(
    private _ActivatedRoute: ActivatedRoute,
    private _SettingsServices: SettingsService,
    private _ProductDetailsService: ProductDetailsService
  ) {}
  ngOnInit(): void {
    this.id = this._ActivatedRoute.snapshot.params['id'];
    this.id ? (this.addMode = false) : (this.addMode = true);
    if (!this.addMode) {
      this.getProductById();
    }
  }
  getProductById() {
    this._ProductDetailsService.getProductById(+this.id).subscribe({
      next: (response) => {
        console.log(response);
        this.product = response;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  onSubmit(form: FormGroup) {
    // add mode
    if (this.addMode && form.valid) {
      this._SettingsServices.addProduct(form.value).subscribe({
        next: (response) => {
          console.log(response);
          this.success = true;
        },
        error: (error) => {
          console.log(error);

          alert(error.message);
        },
      });
    } else if (!this.addMode && form.valid) {
      this._SettingsServices.editProduct(form.value, +this.id).subscribe({
        next: (response) => {
          console.log(response);
          this.success = true;
        },
        error: (error) => {
          console.log(error);

          alert(error.message);
        },
      });
    }
  }
}
