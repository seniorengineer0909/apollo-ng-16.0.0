import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppsFileManagementComponent } from './apps.filemanagement.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: AppsFileManagementComponent }
    ])],
    exports: [RouterModule]
})
export class AppsFileManagementRoutingModule { }


