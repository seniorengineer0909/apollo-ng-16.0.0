import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppTimelineDemoRoutingModule } from './app.timelinedemo-routing.module';
import { AppTimelineDemoComponent } from './app.timelinedemo.component';
import { TimelineModule } from 'primeng/timeline';
import { ButtonModule } from 'primeng/button';
@NgModule({
  imports: [
    CommonModule,
    TimelineModule,
    ButtonModule,
    AppTimelineDemoRoutingModule
  ],
  declarations: [AppTimelineDemoComponent]
})
export class AppTimelineDemoModule { }
