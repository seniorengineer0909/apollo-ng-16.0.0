import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppNotfoundComponent } from './app.notfound.component';

@NgModule({
  imports: [RouterModule.forChild([
    {path: '', component: AppNotfoundComponent}
  ])],
  exports: [RouterModule]
})
export class AppNotfoundRoutingModule { }
