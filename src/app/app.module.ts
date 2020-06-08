import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateLoader, TranslateModule, TranslateModuleConfig } from '@ngx-translate/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CallToActionComponent } from './call-to-action/call-to-action.component';
import { CtaUrlDirective } from './cta-url.directive';
import { HeaderComponent } from './header/header.component';
import { HttpRequestComponent } from './http-request/http-request.component';
import { CanActivateCartGuard } from './my-cart/guards/can-activate-cart.guard';
import { ObservableComponent } from './observable/observable.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { CommunicationService, EmailService } from './services/communication.service';
import { SendService } from './services/send.service';
import { SharedModule } from './shared/shared.module';
import { TemplateDrivenFormsComponent } from './template-driven-forms/template-driven-forms.component';
import { AppTranslateLoader } from './translation/loader/app-translate-loader';

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

// const MY_MOMENT_FORMATS = {
//   parseInput: 'l LT',
//   fullPickerInput: 'l LT',
//   datePickerInput: 'MM-DD-YYYY',
//   timePickerInput: 'LT',
//   monthYearLabel: 'MMM YYYY',
//   dateA11yLabel: 'LL',
//   monthYearA11yLabel: 'MMMM YYYY',
// };
@NgModule({
  declarations: [
    AppComponent,
    ObservableComponent,
    ReactiveFormsComponent,
    HeaderComponent,
    TemplateDrivenFormsComponent,
    HttpRequestComponent,
    CtaUrlDirective,
    CallToActionComponent 
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
    
    // OwlDateTimeModule,
    // OwlMomentDateTimeModule
  ],
  providers: [CanActivateCartGuard,
    // { provide: OWL_DATE_TIME_FORMATS, useValue: MY_MOMENT_FORMATS },
    CommunicationService,
    SendService,
    EmailService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
