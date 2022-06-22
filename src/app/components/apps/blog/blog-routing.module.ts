import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [RouterModule.forChild([
        { path: 'list', data: { breadcrumb: 'Blog List' }, loadChildren: () => import('./bloglist/app.bloglist.module').then(m => m.AppBloglistModule) },
        { path: 'detail', data: { breadcrumb: 'Blog Detail' }, loadChildren: () => import('./blogdetail/blogdetail.module').then(m => m.BlogDetailModule) },
        { path: 'edit', data: { breadcrumb: 'Blog Edit' }, loadChildren: () => import('./blogedit/blogedit.module').then(m => m.BlogeditModule) }
    ])],
    exports: [RouterModule]
})
export class BlogRoutingModule { }
