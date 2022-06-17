import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppErrorComponent } from './app.error.component';

@NgModule({
  imports: [RouterModule.forChild([
    {path:'', component: AppErrorComponent}
  ])],
  exports: [RouterModule]
})
export class AppErrorRoutingModule { }
