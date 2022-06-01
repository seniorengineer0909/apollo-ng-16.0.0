import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppTwoStepVerificationComponent } from './app.twostepverification.component';

@NgModule({
  imports: [RouterModule.forChild([
    {path: '' , component: AppTwoStepVerificationComponent}
  ])],
  exports: [RouterModule]
})
export class AppTwoStepVerificationRoutingModule { }
