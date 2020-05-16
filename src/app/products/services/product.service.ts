import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';
import { IProduct } from '../interfaces/product.interface';

@Injectable()
export class ProductService {
  name = "Subbu";

  productsURL: string = 'assets/data/products.json';
  productsRootURL: string = 'api/products';
  constructor(private http: HttpClient) {

  }

  getProducts(): Observable<{} | IProduct[]> {
    return this.http.get<{} |IProduct[]>(this.productsRootURL)
      .pipe(
        tap((res) => res),
        catchError((err) => err)
      );
  }
  getProductByID(id: number): Observable<{} |IProduct> {
    return this.http.get<{} |IProduct>(this.productsRootURL + '/' + id)
      .pipe(
        tap((res) => res),
        catchError((err) => err)
      );
  }

  getProductsPromise(): Promise<{} | IProduct[]> {
    return this.http.get<{} |IProduct[]>(this.productsRootURL)
      .pipe(
        tap((res) => res),
        catchError((err) => err),
      ).toPromise();
  }
}
