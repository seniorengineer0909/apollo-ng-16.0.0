import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppOrderHistoryRoutingModule } from './app.orderhistory-routing.module';
import { AppOrderHistoryComponent } from './app.orderhistory.component';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { ProgressModule } from '../progress/progress.module';

@NgModule({
  imports: [
    CommonModule,
    AppOrderHistoryRoutingModule,
    TableModule,
    ButtonModule,
    ProgressModule
  ],
  declarations: [AppOrderHistoryComponent]
})
export class AppOrderHistoryModule { }
