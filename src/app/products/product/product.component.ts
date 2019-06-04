import { Component, OnInit, ViewChild, ElementRef, ViewChildren, ContentChild } from '@angular/core';
import { ProductService } from '../services/product.service';
import { IProduct } from '../interfaces/product.interface';
import { SharedMessageService } from 'src/app/shared/services/shared-message.service';

@Component({
  selector: 'app-product',
  // template:'<div>Product</div>',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.less']
})
export class ProductComponent implements OnInit {
  products: IProduct[];
  search: string;

  show: boolean = false;
  constructor(
    private productService: ProductService,
    private sharedMessageService: SharedMessageService) { }

  ngOnInit() {
    this.getProducts();
  }


  getProducts(): void {
    this.productService.getProducts().subscribe((products: IProduct[]) => {
      this.products = products;
    });
  }

  addToCart(product: IProduct): void {
    this.sharedMessageService.setCartSubject$(1);
  }
  clickedInParent($event: any): void {
    this.show = !this.show;
  }

}
