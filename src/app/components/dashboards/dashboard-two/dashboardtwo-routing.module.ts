import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DashboardTwoComponent } from './dashboard-two.component';


@NgModule({
  imports: [RouterModule.forChild([
    {path: '', component: DashboardTwoComponent},

  ])],
  exports: [RouterModule]
})
export class DashboardTwoRoutingModule { }
