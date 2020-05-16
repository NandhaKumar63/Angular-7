import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { IProduct } from '../interfaces/product.interface';

@Component({
  selector: 'app-product-list-item',
  templateUrl: './product-list-item.component.html',
  styleUrls: ['./product-list-item.component.less']
})
export class ProductListItemComponent implements OnInit {

  @Input('productDetail')
  productItem: IProduct;

  @Output('addingToCart')
  addToCartClicked = new EventEmitter<IProduct>();

  constructor() { }

  ngOnInit() {


  }

  addToCartChild(product: IProduct) {
    this.addToCartClicked.emit(product);
  }

}
