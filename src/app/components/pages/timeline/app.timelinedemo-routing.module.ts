import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppTimelineDemoComponent } from './app.timelinedemo.component';

@NgModule({
  imports: [RouterModule.forChild([
    {path: '', component: AppTimelineDemoComponent}
  ])],
  exports: [RouterModule]
})
export class AppTimelineDemoRoutingModule { }
