import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppTimelineDemoRoutingModule } from './app.timelinedemo-routing.module';
import { AppTimelineDemoComponent } from './app.timelinedemo.component';
@NgModule({
  imports: [
    CommonModule,
    AppTimelineDemoRoutingModule
  ],
  declarations: [AppTimelineDemoComponent]
})
export class AppTimelineDemoModule { }
