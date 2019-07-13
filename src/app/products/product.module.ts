import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product/product.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { ProductService } from './services/product.service';
import { FormsModule } from '@angular/forms';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductDataService } from './services/product-data.service';
import { RouterModule } from '@angular/router';
import { SearchPipe } from './pipes/search.pipe';
import { ChildReusableComponent } from '../child-reusable/child-reusable.component';
import { ProductRoutingModule } from './product-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ProductComponent,
    SearchPipe, ProductDetailComponent, ChildReusableComponent],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    ProductRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(ProductDataService)
  ],
  exports: [ProductComponent, SearchPipe],
  providers: [ProductService, ProductDataService]
})
export class ProductModule { }
