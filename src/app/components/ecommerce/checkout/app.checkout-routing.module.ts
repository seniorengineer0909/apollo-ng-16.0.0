import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppCheckoutComponent } from './app.checkout.component';

@NgModule({
  imports: [RouterModule.forChild([
    {path: '', component: AppCheckoutComponent}
  ])],
  exports: [RouterModule]
})
export class AppCheckoutRoutingModule { }
