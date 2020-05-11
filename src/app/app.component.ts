import { Component, OnInit, Inject, inject } from '@angular/core';
import { Subscription } from 'rxjs';
import { SharedMessageService } from './shared/services/shared-message.service';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent implements OnInit {

  title = 'Shop';
  cartItemSubscription: Subscription;
  cartCount: number = 0;

  constructor(
    // @Inject('language') private myFunc:any,
    private translateService: TranslateService, private sharedMessageService: SharedMessageService, private router: Router) {

  }

  ngOnInit(): void {
  //  console.log(this.myFunc(2));
  //  this.myFunc['name'] = "kumar";
  //  console.log(this.myFunc);
    // do Translation
    this.translate();
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
  translate(): void {
    this.translateService.use('en-us');
  }
}
