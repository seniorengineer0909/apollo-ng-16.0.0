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
import { BankingDashboardComponent } from './banking.dashboard.component';
import { BankingDashboardRoutingModule } from './banking.dashboard-routing.module';

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
    BankingDashboardRoutingModule
  ],
  declarations: [BankingDashboardComponent]
})
export class BankingDashboardModule { }
