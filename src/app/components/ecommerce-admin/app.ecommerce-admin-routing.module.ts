import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [RouterModule.forChild([
    {path: 'productlist', loadChildren: () => import('./productlist/app.productlist.module').then(m => m.AppProductListModule)},
    {path: 'orderdetails', loadChildren: () => import('./orderdetails/app.orderdetails.module').then(m => m.AppOrderDetailsModule)},
    {path: 'orders', loadChildren: () => import('./orders/app.orders.module').then(m => m.AppOrdersModule)}
  ])],
  exports: [RouterModule]
})
export class AppEcommerceAdminRoutingModule { }
