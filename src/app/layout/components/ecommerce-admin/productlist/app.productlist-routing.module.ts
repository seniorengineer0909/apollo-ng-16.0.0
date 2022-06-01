import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppProductListComponent } from './app.productlist.component';

@NgModule({
  imports: [RouterModule.forChild([
    {path: '', component: AppProductListComponent}
  ])],
  exports: [RouterModule]
})
export class AppProductListRoutingModule { }
