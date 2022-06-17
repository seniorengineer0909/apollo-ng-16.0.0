import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AnalyticsDashboardComponent } from './analytics.dashboard.component';

@NgModule({
  imports: [RouterModule.forChild([
    {path: '', component: AnalyticsDashboardComponent},

  ])],
  exports: [RouterModule]
})
export class AnalyticsDashboardRoutingModule { }
