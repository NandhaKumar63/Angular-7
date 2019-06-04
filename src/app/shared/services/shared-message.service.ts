import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedMessageService {

  private cartSubject = new Subject<number>();

  constructor() { }

  getCartSubject$(): Observable<number> {
    return this.cartSubject.asObservable();
  }
  setCartSubject$(count: number) {
    this.cartSubject.next(count);
  }
}
