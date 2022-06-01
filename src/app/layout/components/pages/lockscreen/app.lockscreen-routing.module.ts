import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppLockScreenComponent } from './app.lockscreen.component';

@NgModule({
  imports: [RouterModule.forChild([
    {path: '', component: AppLockScreenComponent}
  ])],
  exports: [RouterModule]
})
export class AppLockScreenRoutingModule { }
