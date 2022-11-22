import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsListRoutingModule } from './products-list-routing.module';
import { ProductsListComponent } from './component/products-list.component';
import { SharedModule } from '../shared/shared.module';
import { NgxPaginationModule } from 'ngx-pagination';
@NgModule({
  declarations: [ProductsListComponent],
  imports: [
    CommonModule,
    ProductsListRoutingModule,
    SharedModule,
    NgxPaginationModule,
  ],
})
export class ProductsListModule {}
