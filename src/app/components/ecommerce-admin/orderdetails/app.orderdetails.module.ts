import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppOrderDetailsRoutingModule } from './app.orderdetails-routing.module';
import { AppOrderDetailsComponent } from './app.orderdetails.component';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { ProgressModule } from '../progress/progress.module';
@NgModule({
  imports: [
    CommonModule,
    AppOrderDetailsRoutingModule,
    FormsModule,
    ButtonModule,
    TableModule,
    RippleModule,
    ProgressModule,
    InputTextModule
  ],
  declarations: [AppOrderDetailsComponent]
})
export class AppOrderDetailsModule { }
