import { Component, OnInit } from '@angular/core';
import { SharedMessageService } from 'src/app/shared/services/shared-message.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.less']
})
export class CartComponent implements OnInit {

  message = "Initial Change";
  showComponent = true;

  constructor(private sharedMsgService: SharedMessageService) {

  }

  ngOnInit() {
    
  }

  trigger(): void {
    this.message = "On Changes Triggered...";
    this.sharedMsgService.setDestroySubject$(true);
  }

  hideComponent(): void {
    this.showComponent = false;
  }

}
