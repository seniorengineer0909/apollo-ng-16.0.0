import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppLandingComponent } from './app.landing.component';

@NgModule({
  imports: [RouterModule.forChild([
    {path: '', component: AppLandingComponent}
  ])],
  exports: [RouterModule]
})
export class AppLandingRoutingModule { }
