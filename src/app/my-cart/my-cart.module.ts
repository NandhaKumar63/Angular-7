import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart/cart.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { CartDataService } from './services/cart-data.service';
import { CartService } from './services/cart.service';
import { Routes, RouterModule } from '@angular/router';

// const routes: Routes = [
//   { path: '', component: CartComponent, pathMatch: 'full' }
// ];

@NgModule({
  declarations: [CartComponent],
  imports: [
    CommonModule,
    RouterModule,
    // HttpClientInMemoryWebApiModule.forFeature(CartDataService)
  ],
  providers: [CartService, CartDataService]
})
export class MyCartModule { }
