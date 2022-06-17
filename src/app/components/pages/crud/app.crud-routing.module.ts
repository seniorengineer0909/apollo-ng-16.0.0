import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppCrudComponent } from './app.crud.component';

@NgModule({
  imports: [RouterModule.forChild([
    {path: '', component: AppCrudComponent}
  ])],
  exports: [RouterModule]
})
export class AppCrudRoutingModule { }
