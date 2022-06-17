import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputTextModule } from 'primeng/inputtext';
import { ChartModule } from 'primeng/chart';
import { KnobModule } from 'primeng/knob';
import { RippleModule } from 'primeng/ripple';
import { AnalyticsDashboardComponent } from './analytics.dashboard.component';
import { AnalyticsDashboardRoutingModule } from './analytics.dashboard-routing.module';
import { ChipModule } from 'primeng/chip';
import { CheckboxModule } from 'primeng/checkbox';
import { ChipsModule } from 'primeng/chips';
import { MenuModule } from 'primeng/menu';

@NgModule({
  imports: [
    CommonModule,
    ButtonModule,
    RippleModule,
    DropdownModule,
    FormsModule,
    TableModule,
    InputTextModule,
    InputTextareaModule,
    ChartModule,
    KnobModule,
    AnalyticsDashboardRoutingModule,
    ChipModule,
    CheckboxModule,
    ChipsModule,
    MenuModule,

  ],
  declarations: [AnalyticsDashboardComponent]
})
export class AnalyticsDashboardModule { }
