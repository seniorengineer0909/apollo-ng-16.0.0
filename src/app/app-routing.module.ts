import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppLayoutComponent} from './layout/app.layout.component';

const routes: Routes = [
    {
        path: '', component: AppLayoutComponent,
        children: [
            {path: '', loadChildren: () => import('./components/dashboards/dashboarddemo.module').then(m => m.DashboardDemoModule)},
            {path: 'uikit', loadChildren: () => import('./components/uikit/uikit.module').then(m => m.UIkitModule)},
        ]
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
