import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedMessageService {

  private cartSubject = new Subject<number>();
  private destroySubject = new Subject<boolean>();

  constructor() { }

  getCartSubject$(): Observable<number> {
    return this.cartSubject.asObservable();
  }
  setCartSubject$(count: number) {
    this.cartSubject.next(count);
  }


  getDestroySubject$(): Observable<boolean> {
    return this.destroySubject.asObservable();
  }
  setDestroySubject$(enabled: boolean) {
    this.destroySubject.next(enabled);
  }


}
