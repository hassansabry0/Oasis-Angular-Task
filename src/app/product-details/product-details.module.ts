import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductDetailsRoutingModule } from './product-details-routing.module';
import { ProductDetailsComponent } from './component/product-details.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ProductDetailsComponent],
  imports: [CommonModule, ProductDetailsRoutingModule, SharedModule],
  exports: [ProductDetailsComponent],
})
export class ProductDetailsModule {}
