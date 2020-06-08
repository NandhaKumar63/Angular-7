import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductComponent } from './product/product.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { IncredientsComponent } from './incredients/incredients.component';
import { PageNotFoundComponent } from '../shared/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', component: ProductComponent, pathMatch: 'full' },
  {
    path: ':id', component: ProductDetailComponent,
    canActivateChild:[],
    children: [
      { path: '', redirectTo: 'incredients', pathMatch: 'full' },
      { path: 'reviews', component: ReviewsComponent },
      { path: 'incredients', component: IncredientsComponent, canDeactivate:[] },
      { path: '**', component: PageNotFoundComponent }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ProductRoutingModule { }