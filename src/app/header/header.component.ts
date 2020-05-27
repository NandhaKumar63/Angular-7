import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { SharedMessageService } from '../shared/services/shared-message.service';
import { CommunicationService } from '../services/communication.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {

  
  title = 'Shop';
  cartItemSubscription: Subscription;
  cartCount: number = 0;
  constructor(private commService: CommunicationService,
    private translateService: TranslateService, 
    private sharedMessageService: SharedMessageService,
     private router: Router) { }

  ngOnInit() {
    this.setUserPermissions();
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

  
  setUserPermissions(): void {
    let userInfo = {
      username: 'juristr',
      permissions: [
        'read',
        'write',
        'view'
      ]
    };
    localStorage.setItem('user', JSON.stringify(userInfo))
  }
}
