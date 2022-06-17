import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppPricingComponent } from './app.pricing.component';

@NgModule({
  imports: [RouterModule.forChild([
    {path: '', component: AppPricingComponent}
  ])],
  exports: [RouterModule]
})
export class AppPricingRoutingModule { }
