import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppLoginComponent } from './app.login.component';

@NgModule({
  imports: [RouterModule.forChild([
    {path: '', component: AppLoginComponent}
  ])],
  exports: [RouterModule]
})
export class AppLoginRoutingModule { }
