import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppEmailVerificationComponent } from './app.emailverification.component';

@NgModule({
  imports: [RouterModule.forChild([
    {path: '', component: AppEmailVerificationComponent}
  ])],
  exports: [RouterModule]
})
export class AppEmailVerificationRoutingModule { }
