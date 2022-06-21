import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppAboutUsComponent } from './app.aboutus.component';

@NgModule({
  imports: [RouterModule.forChild([
    {path: '', component: AppAboutUsComponent}
  ])],
  exports: [RouterModule]
})
export class AppAboutUsRoutingModule { }
