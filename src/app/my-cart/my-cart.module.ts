import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart/cart.component';
// import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { CartDataService } from './services/cart-data.service';
import { CartService } from './services/cart.service';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { LifecycleComponent } from '../lifecycle/lifecycle.component';
import { OwlDateTimeModule } from 'ng-pick-datetime/date-time/date-time.module';
import { OwlMomentDateTimeModule } from 'ng-pick-datetime-moment/moment-adapter/moment-date-time.module';
import { OWL_DATE_TIME_FORMATS } from 'ng-pick-datetime/date-time/adapter/date-time-format.class';

const routes: Routes = [
  { path: '', component: CartComponent, pathMatch: 'full' }
];
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
  declarations: [CartComponent, LifecycleComponent],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    RouterModule.forChild(routes),
    OwlDateTimeModule,
    OwlMomentDateTimeModule
    // HttpClientInMemoryWebApiModule.forFeature(CartDataService)
  ],
  providers: [CartService,{ provide: OWL_DATE_TIME_FORMATS, useValue: MY_MOMENT_FORMATS }, CartDataService]
})
export class MyCartModule { }
