import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppsFilemanagamentComponent } from './apps.filemanagament.component';


@NgModule({
  imports: [RouterModule.forChild([
    {path:'', component: AppsFilemanagamentComponent}
  ])],
  exports: [RouterModule]
})
export class AppsFileManagamentRoutingModule { }


