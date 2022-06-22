import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [RouterModule.forChild([
    {path: 'product-overview', data: {breadcrumb: 'Product Overview'}, loadChildren: () => import('./productoverview/app.productoverview.module').then(m => m.AppProductoverviewModule)},
    {path: 'shop', data: {breadcrumb: 'Shop'}, loadChildren: () => import('./shop/app.shop.module').then(m => m.AppShopModule)},
    {path: 'shopping-cart', data: {breadcrumb: 'Shopping Cart'}, loadChildren: () => import('./shopping-cart/app.shopping-cart.module').then(m => m.AppShoppingCartModule)},
    {path: 'checkout', data: {breadcrumb: 'Checkout'}, loadChildren: () => import('./checkout/app.checkout.module').then(m => m.AppCheckoutModule)},
    {path: 'product-list', data: {breadcrumb: 'Product List'}, loadChildren: () => import('./productlist/app.productlist.module').then(m => m.AppProductListModule)},
    {path: 'new-product', data: {breadcrumb: 'New Product'}, loadChildren: () => import('./newproduct/app.newproduct.module').then(m => m.AppNewProductModule)},
    {path: 'order-history', data: {breadcrumb: 'Order History'}, loadChildren: () => import('./orderhistory/app.orderhistory.module').then(m => m.AppOrderHistoryModule)},
    {path: 'order-summary', data: {breadcrumb: 'Order Summary'}, loadChildren: () => import('./ordersummary/app.ordersummary.module').then(m => m.AppOrderSummaryModule)},
    {path: 'edit-order', data: {breadcrumb: 'Edit Order'}, loadChildren: () => import('./editorder/app.editorder.module').then(m => m.AppEditOrderModule)}
  ])],
  exports: [RouterModule]
})
export class AppEcommerceRoutingModule { }
