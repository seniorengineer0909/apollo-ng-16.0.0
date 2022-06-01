import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppEmptyDemoComponent } from './app.emptydemo.component';

@NgModule({
  imports: [RouterModule.forChild([
    {path: '', component: AppEmptyDemoComponent}
  ])],
  exports: [RouterModule]
})
export class AppEmptyDemoRoutingModule { }
