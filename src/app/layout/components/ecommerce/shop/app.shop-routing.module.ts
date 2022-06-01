import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppShopComponent } from './app.shop.component';

@NgModule({
  imports: [RouterModule.forChild([
    {path: '', component: AppShopComponent}
  ])],
  exports: [RouterModule]
})
export class AppShopRoutingModule { }
