import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppProductOverviewComponent } from './app.productoverview.component';


@NgModule({
  imports: [RouterModule.forChild([
    {path: '', component: AppProductOverviewComponent }
  ])],
  exports: [RouterModule]
})
export class AppProductoverviewRoutingModule { }
