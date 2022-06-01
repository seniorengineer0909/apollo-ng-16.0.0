import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppNewPasswordComponent } from './app.newpassword.component';

@NgModule({
  imports: [RouterModule.forChild([
    {path: '', component: AppNewPasswordComponent}
  ])],
  exports: [RouterModule]
})
export class AppNewPasswordRoutingModule { }
