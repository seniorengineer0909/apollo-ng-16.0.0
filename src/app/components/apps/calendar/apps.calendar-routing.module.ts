import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppsCalendarComponent } from './apps.calendar.component';

@NgModule({
  imports: [RouterModule.forChild([
    {path:'', component: AppsCalendarComponent}
  ])],
  exports: [RouterModule]
})
export class AppsCalendarRoutingModule { }
