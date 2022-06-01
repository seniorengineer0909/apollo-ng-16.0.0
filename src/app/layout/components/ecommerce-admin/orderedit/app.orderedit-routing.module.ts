import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppOrderEditComponent } from './app.orderedit.component';

@NgModule({
  imports: [RouterModule.forChild([
    {path:'', component: AppOrderEditComponent}
  ])],
  exports: [RouterModule]
})
export class AppOrderEditRoutingModule { }
