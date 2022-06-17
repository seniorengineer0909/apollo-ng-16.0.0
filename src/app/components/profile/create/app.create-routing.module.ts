import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppCreateComponent } from './app.create.component';

@NgModule({
  imports: [RouterModule.forChild([
    {path: '', component: AppCreateComponent}
  ])],
  exports: [RouterModule]
})
export class AppCreateRoutingModule { }
