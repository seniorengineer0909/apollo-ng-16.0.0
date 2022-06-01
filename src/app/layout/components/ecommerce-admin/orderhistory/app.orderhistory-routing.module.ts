import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppOrderHistoryComponent } from './app.orderhistory.component';

@NgModule({
  imports: [RouterModule.forChild([
    {path: '', component: AppOrderHistoryComponent}
  ])],
  exports: [RouterModule]
})
export class AppOrderHistoryRoutingModule { }
