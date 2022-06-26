import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimelineDemoRoutingModule } from './timelinedemo-routing.module';
import { TimelineDemoComponent } from './timelinedemo.component';
import { TimelineModule } from 'primeng/timeline';
import { ButtonModule } from 'primeng/button';

@NgModule({
    imports: [
        CommonModule,
        TimelineModule,
        ButtonModule,
        TimelineDemoRoutingModule
    ],
    declarations: [TimelineDemoComponent]
})
export class TimelineDemoModule { }
