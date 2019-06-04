import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICart } from '../interfaces/cart.interface';
import { catchError, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartProductsRootURL: string = 'api/cartItems';
  constructor(private http: HttpClient) {

  }

  getProducts(): Observable<{} | ICart[]> {
    return this.http.get<{} | ICart[]>(this.cartProductsRootURL)
      .pipe(
        tap((res) => res),
        catchError((err) => err)
      );
  }
  getProductByID(id: number): Observable<{} | ICart> {
    return this.http.delete<{} | ICart>(this.cartProductsRootURL + '/' + id)
      .pipe(
        tap((res) => res),
        catchError((err) => err)
      );
  }

}
