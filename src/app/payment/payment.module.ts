import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentRoutingModule } from './payment-routing.module';
import { CreditCardComponent } from './credit-card/credit-card.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [CreditCardComponent],
  imports: [
    CommonModule,
    SharedModule,
    PaymentRoutingModule
  ]
})
export class PaymentModule { }
