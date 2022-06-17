import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppBloglistComponent } from './app.bloglist.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: AppBloglistComponent }

    ])],
    exports: [RouterModule]
})
export class AppBlogListRoutingModule { }

