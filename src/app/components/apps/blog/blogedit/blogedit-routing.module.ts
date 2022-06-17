import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BlogeditComponent } from './blogedit.component';


@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: BlogeditComponent }
    ])],
    exports: [RouterModule]
})
export class BlogeditRoutingModule { }
