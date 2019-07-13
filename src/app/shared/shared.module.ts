import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RouterModule } from '@angular/router';
import { AppTranslationModule } from '../translation/app-translation.module';

@NgModule({
  declarations: [PageNotFoundComponent],
  imports: [
    CommonModule,
    RouterModule,
    AppTranslationModule
  ],
  exports: [PageNotFoundComponent, AppTranslationModule],
  providers: []
})
export class SharedModule { }
