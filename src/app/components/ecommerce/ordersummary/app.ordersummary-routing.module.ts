import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppOrderSummaryComponent } from './app.ordersummary.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: AppOrderSummaryComponent }
    ])],
    exports: [RouterModule]
})
export class AppOrderSummaryRoutingModule { }
