import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [RouterModule.forChild([
        { path: 'aboutus', loadChildren: () => import('./aboutus/app.aboutus.module').then(m => m.AppAboutUsModule) },
        { path: 'contact', loadChildren: () => import('./contact/app.contact.module').then(m => m.AppContactModule) },
        { path: 'crud', loadChildren: () => import('./crud/app.crud.module').then(m => m.AppCrudModule) },
        { path: 'empty', loadChildren: () => import('./empty/app.emptydemo.module').then(m => m.AppEmptyDemoModule) },
        { path: 'faq', loadChildren: () => import('./faq/app.faq.module').then(m => m.AppFaqModule) },
        { path: 'help', loadChildren: () => import('./help/app.help.module').then(m => m.AppHelpModule) },
        { path: 'invoice', loadChildren: () => import('./invoice/app.invoice.module').then(m => m.AppInvoiceModule) },
        { path: 'timeline', loadChildren: () => import('./timeline/app.timelinedemo.module').then(m => m.AppTimelineDemoModule) }
    ])],
    exports: [RouterModule]
})
export class PagesRoutingModule { }
