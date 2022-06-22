import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [RouterModule.forChild([
    {path: 'productoverview', data: {breadcrumb: 'Product Overview'}, loadChildren: () => import('./productoverview/app.productoverview.module').then(m => m.AppProductoverviewModule)},
    {path: 'shop', data: {breadcrumb: 'Shop'}, loadChildren: () => import('./shop/app.shop.module').then(m => m.AppShopModule)},
    {path: 'shopping-cart', data: {breadcrumb: 'Shopping Cart'}, loadChildren: () => import('./shopping-cart/app.shopping-cart.module').then(m => m.AppShoppingCartModule)},
    {path: 'checkout', data: {breadcrumb: 'Checkout'}, loadChildren: () => import('./checkout/app.checkout.module').then(m => m.AppCheckoutModule)},
    {path: 'newproduct', data: {breadcrumb: 'New Product'}, loadChildren: () => import('./newproduct/app.newproduct.module').then(m => m.AppNewProductModule)},
  ])],
  exports: [RouterModule]
})
export class AppEcommerceRoutingModule { }
