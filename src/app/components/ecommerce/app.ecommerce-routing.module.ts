import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [RouterModule.forChild([
    {path: 'productoverview', loadChildren: () => import('./productoverview/app.productoverview.module').then(m => m.AppProductoverviewModule)},
    {path: 'shop', loadChildren: () => import('./shop/app.shop.module').then(m => m.AppShopModule)},
    {path: 'checkout', loadChildren: () => import('./checkout/app.checkout.module').then(m => m.AppCheckoutModule)},
    {path: 'newproduct', loadChildren: () => import('./newproduct/app.newproduct.module').then(m => m.AppNewProductModule)},
  ])],
  exports: [RouterModule]
})
export class AppEcommerceRoutingModule { }
