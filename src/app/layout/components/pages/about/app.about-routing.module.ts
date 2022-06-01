import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppAboutComponent } from './app.about.component';

@NgModule({
  imports: [RouterModule.forChild([
    {path: '', component: AppAboutComponent}
  ])],
  exports: [RouterModule]
})
export class AppAboutRoutingModule { }
