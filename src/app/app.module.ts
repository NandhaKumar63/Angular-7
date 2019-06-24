import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductModule } from './products/product.module';
import { SharedModule } from './shared/shared.module';
import { ChildTwoComponent } from './parent/child-two/child-two.component';
import { ParentComponent } from './parent/parent.component';
import { ChildOneComponent } from './parent/child-one/child-one.component';
import { ChildThreeComponent } from './parent/child-three/child-three.component';
import { MyCartModule } from './my-cart/my-cart.module';
import { CanActivateCartGuard } from './my-cart/guards/can-activate-cart.guard';
import { AppRoutingModule } from './app-routing.module';
import { ObservableComponent } from './observable/observable.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';


@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildOneComponent,
    ChildTwoComponent,
    ChildThreeComponent,
    ObservableComponent,
    ReactiveFormsComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    ProductModule,
    SharedModule,
    MyCartModule
  ],
  providers: [CanActivateCartGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
