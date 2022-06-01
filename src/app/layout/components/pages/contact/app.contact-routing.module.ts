import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppContactComponent } from './app.contact.component';

@NgModule({
  imports: [RouterModule.forChild([
    {path: '', component: AppContactComponent}
  ])],
  exports: [RouterModule]
})
export class AppContactRoutingModule { }
