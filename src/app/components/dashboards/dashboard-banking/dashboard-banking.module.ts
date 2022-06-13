import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputTextModule } from 'primeng/inputtext';
import { ChartModule } from 'primeng/chart';
import { RippleModule } from 'primeng/ripple';
import { DashboardBankingComponent } from './dashboard-banking.component';
import { DashboardBankingRoutingModule } from './dashboard-banking-routing.module';



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
    DashboardBankingRoutingModule

  ],
  declarations: [DashboardBankingComponent]
})
export class DashboardBankingModule { }
