import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DashboardDemoComponent } from './dashboarddemo.component';
import { DashboardDemoRoutingModule } from './dashboarddemo-routing.module';
import { ButtonModule } from 'primeng/button';
import { ChartModule } from 'primeng/chart';
import { CheckboxModule } from 'primeng/checkbox';
import { ChipModule } from 'primeng/chip';
import { ChipsModule } from 'primeng/chips';
import { DropdownModule } from 'primeng/dropdown';
import { FullCalendarModule } from '@fullcalendar/angular';
import { MenuModule } from 'primeng/menu';
import { TableModule } from 'primeng/table';
import { RippleModule } from 'primeng/ripple';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DashboardDemoRoutingModule,
    ButtonModule,
    ChipModule,
    ChartModule,
    CheckboxModule,
    ChipModule,
    ChipsModule,
    DropdownModule,
    FullCalendarModule,
    MenuModule,
    TableModule,
    RippleModule
  ],
  declarations: [DashboardDemoComponent]
})
export class DashboardDemoModule { }
