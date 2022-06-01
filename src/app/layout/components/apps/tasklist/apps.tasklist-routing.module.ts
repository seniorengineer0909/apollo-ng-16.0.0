import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppsTaskListComponent } from './apps.tasklist.component';
import { CreateTaskComponent } from './create-task/create-task.component';

@NgModule({
  imports: [RouterModule.forChild([
    {path: '', component: AppsTaskListComponent},
    {path: 'create-task', component: CreateTaskComponent}
  ])],
  exports: [RouterModule]
})
export class AppsTaskListRoutingModule { }
