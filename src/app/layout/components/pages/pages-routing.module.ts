import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [RouterModule.forChild([
    {path: 'crud', loadChildren: () => import('./crud/app.crud.module').then(m => m.AppCrudModule)},
    {path: 'help', loadChildren: () => import('./help/app.help.module').then(m => m.AppHelpModule)},
    {path: 'invoice', loadChildren: () => import('./invoice/app.invoice.module').then(m => m.AppInvoiceModule)},
    {path: 'pricing', loadChildren: () => import('./pricing/app.pricing.module').then(m => m.AppPricingModule)},
    {path: 'timeline', loadChildren: () => import('./timeline/app.timelinedemo.module').then(m => m.AppTimelineDemoModule)},
    {path: 'faq', loadChildren: () => import('./faq/app.faq.module').then(m => m.AppFaqModule)},
    {path: 'contact', loadChildren: () => import('./contact/app.contact.module').then(m => m.AppContactModule)},
    {path: 'wizard', loadChildren: () => import('./wizard/app.wizard.module').then(m => m.AppWizardModule)},
    {path: 'search-results', loadChildren: () => import('./search-results/app.search-results.module').then(m => m.AppSearchResultsModule)},
    {path: 'about', loadChildren: () => import('./about/app.about.module').then(m => m.AppAboutModule)},
    {path: 'empty', loadChildren: () => import('./empty/app.emptydemo.module').then(m => m.AppEmptyDemoModule)},
  ])],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
