import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppForgotPasswordComponent } from './app.forgotpassword.component';

@NgModule({
  imports: [RouterModule.forChild([
    {path: '', component: AppForgotPasswordComponent}
  ])],
  exports: [RouterModule]
})
export class AppForgotPasswordRoutingModule { }
