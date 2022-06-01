import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppInvoiceRoutingModule } from './app.invoice-routing.module';
import { AppInvoiceComponent } from './app.invoice.component';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';

@NgModule({
  imports: [
    CommonModule,
    AppInvoiceRoutingModule, 
    ButtonModule,
    TableModule
  ],
  declarations: [AppInvoiceComponent]
})
export class AppInvoiceModule { }
