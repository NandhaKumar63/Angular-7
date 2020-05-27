import { Component, OnInit, Inject, inject } from '@angular/core';
import { Subscription } from 'rxjs';
import { SharedMessageService } from './shared/services/shared-message.service';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { ProductService } from './products/services/product.service';
import { CommunicationService } from './services/communication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {

  title = 'Shop';
  cartItemSubscription: Subscription;
  cartCount: number = 0;

  constructor(private commService: CommunicationService,
    private translateService: TranslateService, private sharedMessageService: SharedMessageService, private router: Router) {
      commService.send();
  }

  ngOnInit(): void {
  }

}
