import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRegisterComponent } from './app.register.component';

@NgModule({
  imports: [RouterModule.forChild([
    {path: '', component: AppRegisterComponent}
  ])],
  exports: [RouterModule]
})
export class AppRegisterRoutingModule { }
