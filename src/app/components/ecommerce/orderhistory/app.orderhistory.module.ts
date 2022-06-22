import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppOrderHistoryRoutingModule } from './app.orderhistory-routing.module';
import { AppOrderHistoryComponent } from './app.orderhistory.component';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { RippleModule } from 'primeng/ripple';

@NgModule({
    imports: [
        CommonModule,
        AppOrderHistoryRoutingModule,
        ButtonModule,
        DividerModule,
        RippleModule
    ],
    declarations: [AppOrderHistoryComponent]
})
export class AppOrderHistoryModule { }
