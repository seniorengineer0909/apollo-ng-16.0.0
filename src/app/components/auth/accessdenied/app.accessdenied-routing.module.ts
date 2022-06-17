import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppAccessdeniedComponent } from './app.accessdenied.component';

@NgModule({
  imports: [RouterModule.forChild([
    {path: '', component: AppAccessdeniedComponent}
  ])],
  exports: [RouterModule]
})
export class AppAccessdeniedRoutingModule { }
