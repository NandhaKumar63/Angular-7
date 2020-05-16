import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateLoader, TranslateModule, TranslateModuleConfig } from '@ngx-translate/core';
import { OwlDateTimeModule, OWL_DATE_TIME_FORMATS } from 'ng-pick-datetime';
import { OwlMomentDateTimeModule } from 'ng-pick-datetime-moment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CanActivateCartGuard } from './my-cart/guards/can-activate-cart.guard';
import { MyCartModule } from './my-cart/my-cart.module';
import { ObservableComponent } from './observable/observable.component';

import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { SharedModule } from './shared/shared.module';
import { AppTranslateLoader } from './translation/loader/app-translate-loader';
import { ProductListItemComponent } from './products/product-list-item/product-list-item.component';
import { HasPermissionDirective } from './shared/directives/has-permission.directive';
import { PaymentModule } from './payment/payment.module';
import { ProductService } from './products/services/product.service';


export function AppTranslateLoaderFactory(httpClient: HttpClient) {
  return new AppTranslateLoader(httpClient);
}

const translateConfig: TranslateModuleConfig = {
  loader: {
    provide: TranslateLoader,
    useFactory: (AppTranslateLoaderFactory),
    deps: [HttpClient]
  }
};

const func = (value) => {
  if (value === 1) {
    return 'en-US';
  } else {
    return 'en-CA';
  }
}

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
  declarations: [
    AppComponent,
    ObservableComponent,
    ReactiveFormsComponent,
    
      ],
  imports: [
    AppRoutingModule,
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    TranslateModule.forRoot(translateConfig),
    MyCartModule,
    OwlDateTimeModule,
    OwlMomentDateTimeModule,
    PaymentModule
  ],
  providers: [CanActivateCartGuard,
    { provide: OWL_DATE_TIME_FORMATS, useValue: MY_MOMENT_FORMATS },
    // {
    //   provide: 'language', useValue: Object.freeze({ name: 'nandha' }), deps: []
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
