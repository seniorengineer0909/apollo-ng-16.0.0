import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppHelpComponent } from './app.help.component';

@NgModule({
  imports: [RouterModule.forChild([
    {path: '', component: AppHelpComponent}
  ])],
  exports: [RouterModule]
})
export class AppHelpRoutingModule { }
