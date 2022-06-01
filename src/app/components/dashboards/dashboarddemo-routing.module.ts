import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DashboardDemoComponent } from './dashboarddemo.component';

@NgModule({
  imports: [RouterModule.forChild([
    {path: '', component: DashboardDemoComponent}
  ])],
  exports: [RouterModule]
})
export class DashboardDemoRoutingModule { }
