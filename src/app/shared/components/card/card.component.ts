import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../../models/product';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  @Input() product!: Product;
  @Output() deleteProduct: any = new EventEmitter();
  constructor(private _Router: Router) {}

  delete(product: any) {
    this.deleteProduct.emit(product);
  }
  edit(id: number) {
    this._Router.navigate([`/settings/edit/${id}`]);
  }
}
