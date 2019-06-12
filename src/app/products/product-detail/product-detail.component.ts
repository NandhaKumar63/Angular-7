import { Component, OnInit, AfterViewInit } from '@angular/core';
import { IProduct } from '../interfaces/product.interface';
import { ProductService } from '../services/product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.less']
})
export class ProductDetailComponent implements OnInit, AfterViewInit {


  productDetail: IProduct;

  constructor(private productService: ProductService, private routerState: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    const id = this.routerState.snapshot.params['id'];
    this.getProductByID(id);
  }

  ngAfterViewInit(): void {


  }
  getProductByID(id: number): void {
    this.productService.getProductByID(id).subscribe((product: IProduct) => {
      this.productDetail = product;
      const fragmentId = this.routerState.snapshot.fragment;
      setTimeout(() => {
        const ele = document.getElementById(fragmentId);
        // ele.focus();
      });
    });
  }

  gotoProducts(): void {
    this.router.navigate(['../products'], {
      relativeTo: this.routerState
    });
  }
}
