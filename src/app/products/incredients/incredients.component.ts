import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-incredients',
  templateUrl: './incredients.component.html',
  styleUrls: ['./incredients.component.less']
})
export class IncredientsComponent implements OnInit {

  incredients = '';

  constructor(private activatedRoute: ActivatedRoute,
    private productService: ProductService) { }

  ngOnInit() {

    this.activatedRoute.parent.params.subscribe((params) => {
      const prodID = params['id'];
      this.getIncredientsById(prodID);
    });


  }

  getIncredientsById(id: string): void {
    this.incredients = this.productService.getIncredients(id);
  }

}
