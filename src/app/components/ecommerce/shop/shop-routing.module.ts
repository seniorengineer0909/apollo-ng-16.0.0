import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ShopComponent } from './shop.component';

@NgModule({
  imports: [RouterModule.forChild([
    {path: '', component: ShopComponent}
  ])],
  exports: [RouterModule]
})
export class ShopRoutingModule { }
