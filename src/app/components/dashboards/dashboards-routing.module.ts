import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', loadChildren: () => import('./ecommerce/ecommerce.dashboard.module').then(m => m.EcommerceDashboardModule) },
        { path: 'dashboard-banking', loadChildren: () => import('./banking/banking.dashboard.module').then(m => m.BankingDashboardModule) },
        { path: 'dashboard-analytics', loadChildren: () => import('./analytics/analytics.dashboard.module').then(m => m.AnalyticsDashboardModule) }
    ])],
    exports: [RouterModule]
})
export class DashboardsRoutingModule { }
