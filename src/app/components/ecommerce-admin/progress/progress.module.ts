import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressComponent } from './progress.component';
import { TimelineModule } from 'primeng/timeline';
import { ProgressBarModule } from 'primeng/progressbar'


@NgModule({
  imports: [
    CommonModule,
    TimelineModule,
    ProgressBarModule
  ],
  exports: [ProgressComponent],
  declarations: [ProgressComponent]
})
export class ProgressModule { }
