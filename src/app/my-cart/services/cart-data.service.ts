import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class CartDataService implements InMemoryDbService {

  constructor() { }

  createDb() {
    const cartItems = [];
    return { cartItems };
  }
}
