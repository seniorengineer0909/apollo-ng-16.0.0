import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppOrdersComponent } from './app.orders.component';

@NgModule({
  imports: [RouterModule.forChild([
    {path: '', component: AppOrdersComponent}
  ])],
  exports: [RouterModule]
})
export class AppOrdersRoutingModule { }
