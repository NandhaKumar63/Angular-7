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

  constructor(
    private productService: ProductService,
    private sharedMessageService: SharedMessageService) {
  }

  ngOnInit() {
    this.getProducts();
    // console.log("Child Injecctor " +this.productService.name);
  }


  getProducts(): void {
    this.productService.getProducts().subscribe((products: IProduct[]) => {
      this.products = products;
    });
  }

  addTocart(product: IProduct): void {
    this.sharedMessageService.setCartSubject$(1);
  }

  trackbyId(item: any, index: number): number {
    return index;
  }


}
