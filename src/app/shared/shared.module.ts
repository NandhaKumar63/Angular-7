import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppTranslationModule } from '../translation/app-translation.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SafeHtmlPipe } from './pipes/safe-html.pipe';
import { CustomValidatorDirective } from './validators/custom.validator';
import { AppBootstrapModule } from '../app-bootstrap/app-bootstrap.module';
import { NgxMaskModule, IConfig } from 'ngx-mask';

const SHARED_MODULE_CONSTANTS = [
  PageNotFoundComponent, CustomValidatorDirective];
let options: Partial<IConfig> | (() => Partial<IConfig>);

@NgModule({
  declarations: [SHARED_MODULE_CONSTANTS, SafeHtmlPipe],
  imports: [
    CommonModule,
    RouterModule,
    AppTranslationModule,
    AppBootstrapModule,
    NgxMaskModule.forRoot(options)
  ],
  exports: [
    SHARED_MODULE_CONSTANTS,
    AppTranslationModule,
    AppBootstrapModule,
    NgxMaskModule
  ],
  providers: []
})
export class SharedModule { }
