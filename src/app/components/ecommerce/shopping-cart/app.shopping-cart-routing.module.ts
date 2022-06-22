import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppShoppingCartComponent } from './app.shopping-cart.component';

@NgModule({
  imports: [RouterModule.forChild([
    {path: '', component: AppShoppingCartComponent}
  ])],
  exports: [RouterModule]
})
export class AppShoppingCartRoutingModule { }
