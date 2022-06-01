import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppsChatComponent } from './apps.chat.component';

@NgModule({
  imports: [RouterModule.forChild([
    {path: '', component: AppsChatComponent}
  ])],
  exports: [RouterModule]
})
export class AppsChatRoutingModule { }
