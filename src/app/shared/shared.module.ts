import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppTranslationModule } from '../translation/app-translation.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SafeHtmlPipe } from './pipes/safe-html.pipe';
import { CustomValidatorDirective } from './validators/custom.validator';
import { AppBootstrapModule } from '../app-bootstrap/app-bootstrap.module';
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { HasPermissionDirective } from './directives/has-permission.directive';
import { OnlyDigitsDirective } from './directives/only-digits.directive';
import { FloatLabelDirective } from './directives/float-label.directive';
import { CreditCardFormatPipe } from './pipes/credit-card-format.pipe';

const SHARED_MODULE_CONSTANTS = [
  PageNotFoundComponent, CustomValidatorDirective,HasPermissionDirective, OnlyDigitsDirective];
let options: Partial<IConfig> | (() => Partial<IConfig>);

@NgModule({
  declarations: [SHARED_MODULE_CONSTANTS, SafeHtmlPipe, FloatLabelDirective,CreditCardFormatPipe],
  imports: [
    CommonModule,
    RouterModule,
    AppTranslationModule,
    AppBootstrapModule,
    NgxMaskModule.forRoot(options)
  ],
  exports: [
    SHARED_MODULE_CONSTANTS,CreditCardFormatPipe,
    AppTranslationModule,
    AppBootstrapModule,
    NgxMaskModule
  ],
  providers: []
})
export class SharedModule { }
