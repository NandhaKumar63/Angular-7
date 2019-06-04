import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SharedMessageService } from './shared/services/shared-message.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent implements OnInit {

  title = 'Shop';
  cartItemSubscription: Subscription;
  cartCount: number = 0;

  constructor(private sharedMessageService: SharedMessageService, private router: Router) { }

  ngOnInit(): void {
    this.cartCount = JSON.parse(localStorage.getItem('cartCount')) || 0;

    this.cartItemSubscription = this.sharedMessageService.getCartSubject$().subscribe((count: number) => {
      this.cartCount += count;
      localStorage.setItem('cartCount', '' + this.cartCount);
    });
  }

  gotoCart(event: any): void {
    if (this.cartCount > 0) {
      this.router.navigate(['/cart']);
    }
  }

}
