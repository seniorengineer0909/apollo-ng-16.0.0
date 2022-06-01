import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardDemoComponent } from './dashboarddemo.component';
import { DashboardDemoRoutingModule } from './dashboarddemo-routing.module';

@NgModule({
  imports: [
    CommonModule,
    DashboardDemoRoutingModule
  ],
  declarations: [DashboardDemoComponent]
})
export class DashboardDemoModule { }
