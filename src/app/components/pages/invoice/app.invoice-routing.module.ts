import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppInvoiceComponent } from './app.invoice.component';

@NgModule({
  imports: [RouterModule.forChild([
    {path:'', component: AppInvoiceComponent}
  ])],
  exports: [RouterModule]
})
export class AppInvoiceRoutingModule { }
