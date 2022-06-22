import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppsKanbanComponent } from './apps.kanban.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', data: { breadcrumb: 'Board' }, component: AppsKanbanComponent }
    ])],
    exports: [RouterModule]
})
export class AppsKanbanRoutingModule { }
