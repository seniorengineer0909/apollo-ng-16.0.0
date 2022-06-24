import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [RouterModule.forChild([
        { path: 'aboutus', data: { breadcrumb: 'About' }, loadChildren: () => import('./aboutus/app.aboutus.module').then(m => m.AppAboutUsModule) },
        { path: 'contact', data: { breadcrumb: 'Contact' }, loadChildren: () => import('./contact/app.contact.module').then(m => m.AppContactModule) },
        { path: 'crud', data: { breadcrumb: 'Crud' }, loadChildren: () => import('./crud/app.crud.module').then(m => m.AppCrudModule) },
        { path: 'empty', data: { breadcrumb: 'Empty' }, loadChildren: () => import('./empty/app.emptydemo.module').then(m => m.AppEmptyDemoModule) },
        { path: 'faq', data: { breadcrumb: 'FAQ' }, loadChildren: () => import('./faq/faq.module').then(m => m.AppFaqModule) },
        { path: 'help', data: { breadcrumb: 'Help' }, loadChildren: () => import('./help/app.help.module').then(m => m.AppHelpModule) },
        { path: 'invoice', data: { breadcrumb: 'Invoice' }, loadChildren: () => import('./invoice/app.invoice.module').then(m => m.AppInvoiceModule) },
        { path: 'timeline', data: { breadcrumb: 'Timeline' }, loadChildren: () => import('./timeline/timelinedemo.module').then(m => m.TimelineDemoModule) }
    ])],
    exports: [RouterModule]
})
export class PagesRoutingModule { }
