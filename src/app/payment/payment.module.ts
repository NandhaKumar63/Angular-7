import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentRoutingModule } from './payment-routing.module';
import { CreditCardComponent } from './credit-card/credit-card.component';
import { SharedModule } from '../shared/shared.module';
import { OwlDateTimeModule } from 'ng-pick-datetime/date-time/date-time.module';
import { OwlMomentDateTimeModule } from 'ng-pick-datetime-moment/moment-adapter/moment-date-time.module';
import { OWL_DATE_TIME_FORMATS } from 'ng-pick-datetime/date-time/adapter/date-time-format.class';
const MY_MOMENT_FORMATS = {
  parseInput: 'l LT',
  fullPickerInput: 'l LT',
  datePickerInput: 'MM-DD-YYYY',
  timePickerInput: 'LT',
  monthYearLabel: 'MMM YYYY',
  dateA11yLabel: 'LL',
  monthYearA11yLabel: 'MMMM YYYY',
};
@NgModule({
  declarations: [CreditCardComponent],
  imports: [
    CommonModule,
    SharedModule,
    PaymentRoutingModule,
    OwlDateTimeModule,
    OwlMomentDateTimeModule
  ],
  providers: [{ provide: OWL_DATE_TIME_FORMATS, useValue: MY_MOMENT_FORMATS }]
})
export class PaymentModule { }
