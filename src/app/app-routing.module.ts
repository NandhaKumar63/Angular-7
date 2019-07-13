import { NgModule } from '@angular/core';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { ChildThreeComponent } from './parent/child-three/child-three.component';
import { ChildTwoComponent } from './parent/child-two/child-two.component';
import { ChildOneComponent } from './parent/child-one/child-one.component';
import { ParentComponent } from './parent/parent.component';
import { CartComponent } from './my-cart/cart/cart.component';
import { CanActivateCartGuard } from './my-cart/guards/can-activate-cart.guard';
import { Routes, RouterModule } from '@angular/router';
import { ObservableComponent } from './observable/observable.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';

const routes: Routes = [
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  { path: 'observable', component: ObservableComponent },
  { path: 'forms', component: ReactiveFormsComponent },
  { path: 'products', loadChildren: './products/product.module#ProductModule' },
  { path: 'cart', component: CartComponent, canActivate: [CanActivateCartGuard] },
  {
    path: 'parent', component: ParentComponent, children: [
      { path: '', redirectTo: 'child-two', pathMatch: 'full' },
      { path: 'child-one', component: ChildOneComponent },
      { path: 'child-two', component: ChildTwoComponent },
      { path: 'child-three', component: ChildThreeComponent },
      { path: '**', component: PageNotFoundComponent }
    ]
  },
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
