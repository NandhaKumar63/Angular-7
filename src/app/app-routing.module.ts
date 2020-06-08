import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CallToActionComponent } from './call-to-action/call-to-action.component';
import { HttpRequestComponent } from './http-request/http-request.component';
import { ObservableComponent } from './observable/observable.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
const routes: Routes = [
  { path: '', redirectTo: 'cta', pathMatch: 'full' },
  { path: 'cta', component: CallToActionComponent },
  { path: 'observables', component: ObservableComponent },
  { path: 'http-requests', component: HttpRequestComponent },
  { path: 'reactive-forms', component: ReactiveFormsComponent },
  { path: 'products', loadChildren: './products/product.module#ProductModule' },
  { path: 'payment', loadChildren: './payment/payment.module#PaymentModule' },
  { path: 'cart', loadChildren: './my-cart/my-cart.module#MyCartModule' },
  { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
