import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppFaqComponent } from './app.faq.component';

@NgModule({
  imports: [RouterModule.forChild([
    {path: '', component: AppFaqComponent}
  ])],
  exports: [RouterModule]
})
export class AppFaqRoutingModule { }
