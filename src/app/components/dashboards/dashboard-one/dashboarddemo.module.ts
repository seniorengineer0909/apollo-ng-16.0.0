import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardDemoComponent } from './dashboarddemo.component';
import { DashboardDemoRoutingModule } from './dashboarddemo-routing.module';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputTextModule } from 'primeng/inputtext';
import { ChartModule } from 'primeng/chart';
import { KnobModule } from 'primeng/knob';
import { RippleModule } from 'primeng/ripple';



@NgModule({
  imports: [
    CommonModule,
    DashboardDemoRoutingModule,
    ButtonModule,
    RippleModule,
    DropdownModule,
    FormsModule,
    TableModule,
    InputTextModule,
    InputTextareaModule,
    ChartModule,
    KnobModule
  ],
  declarations: [DashboardDemoComponent]
})
export class DashboardDemoModule { }
