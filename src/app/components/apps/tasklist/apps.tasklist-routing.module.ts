import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppsTaskListComponent } from './apps.tasklist.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: AppsTaskListComponent }
    ])],
    exports: [RouterModule]
})
export class AppsTaskListRoutingModule { }
