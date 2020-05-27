import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './my-cart/cart/cart.component';
import { CanActivateCartGuard } from './my-cart/guards/can-activate-cart.guard';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { CreditCardComponent } from './payment/credit-card/credit-card.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { ObservableComponent } from './observable/observable.component';
import { HttpRequestComponent } from './http-request/http-request.component';
const routes: Routes = [
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  { path: 'observables', component: ObservableComponent },
  { path: 'http-requests', component: HttpRequestComponent },
  { path: 'reactive-forms', component: ReactiveFormsComponent },
  { path: 'products', loadChildren: './products/product.module#ProductModule' },
  { path: 'payment', loadChildren: './payment/payment.module#PaymentModule' },
  { path: 'cart', component: CartComponent, canActivate: [CanActivateCartGuard] },
  { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes, { paramsInheritanceStrategy: 'always' })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
