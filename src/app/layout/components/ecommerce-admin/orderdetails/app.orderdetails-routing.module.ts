import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppOrderDetailsComponent } from './app.orderdetails.component';

@NgModule({
  imports: [RouterModule.forChild([
    {path: '', component: AppOrderDetailsComponent}
  ])],
  exports: [RouterModule]
})
export class AppOrderDetailsRoutingModule { }
