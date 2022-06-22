import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppOrderSummaryRoutingModule } from './app.ordersummary-routing.module';
import { AppOrderSummaryComponent } from './app.ordersummary.component';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';

@NgModule({
    imports: [
        CommonModule,
        AppOrderSummaryRoutingModule,
        ButtonModule,
        RippleModule
    ],
    declarations: [
        AppOrderSummaryComponent
    ]
})
export class AppOrderSummaryModule { }
