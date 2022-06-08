import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppLayoutComponent} from './layout/app.layout.component';

const routes: Routes = [
    {
        path: '', component: AppLayoutComponent,
        children: [
            {path: '', loadChildren: () => import('./components/dashboards/dashboard-one/dashboarddemo.module').then(m => m.DashboardDemoModule)},
            {path: 'uikit', loadChildren: () => import('./components/uikit/uikit.module').then(m => m.UIkitModule)},
            {path: 'dashboard-second', loadChildren: () => import('./components/dashboards/dashboard-two/dashboard-two.module').then(m => m.DashboardTwoModule)},
            {path: 'utilities', loadChildren: () => import('./layout/components/utilities/utilities.module').then(m => m.UtilitiesModule)},
            {path: 'pages', loadChildren: () => import('./layout/components/pages/pages.module').then(m => m.PagesModule)},
            {path: 'profile', loadChildren: () => import('./layout/components/profile/profile.module').then(m => m.ProfileModule)},
            {path: 'documentation', loadChildren: () => import('./layout/components/start/start.module').then(m => m.StartModule)},
            {path: 'blocks', loadChildren: () => import('./layout/components/primeblocks/primeblocks.module').then(m => m.PrimeBlocksModule)},
            {path: 'blog', loadChildren: () => import('./layout/components/apps/blog/blog.module').then(m => m.BlogModule)},
            {path: 'ecommerce', loadChildren: () => import('./layout/components/ecommerce/app.ecommerce.module').then(m => m.AppEcommerceModule)},
            {path: 'ecommerce-admin', loadChildren: () => import('./layout/components/ecommerce-admin/app.ecommerce-admin.module').then(m => m.AppEcommerceAdminModule)},

        ]
    },
    {path: 'error', loadChildren: () => import('./layout/components/pages/error/app.error.module').then(m => m.AppErrorModule)},
    {path: 'access', loadChildren: () => import('./layout/components/pages/accessdenied/app.accessdenied.module').then(m => m.AppAccessdeniedModule)},
    {path: 'login', loadChildren: () => import('./layout/components/pages/login/app.login.module').then(m => m.AppLoginModule)},
    {path: 'forgotpassword', loadChildren: () => import('./layout/components/pages/forgotpassword/app.forgotpassword.module').then(m => m.AppForgotPasswordModule)},
    {path: 'register', loadChildren: () => import('./layout/components/pages/register/app.register.module').then(m => m.AppRegisterModule)},
    {path: 'newpassword', loadChildren: () => import('./layout/components/pages/newpassword/app.newpassword.module').then(m => m.AppNewPasswordModule)},
    {path: 'emailverification', loadChildren: () => import('./layout/components/pages/emailverification/app.emailverification.module').then(m => m.AppEmailverificationModule)},
    {path: 'twostepverification', loadChildren: () => import('./layout/components/pages/two-stepverification/app.twostepverification.module').then(m => m.AppTwoStepVerificationModule)},
    {path: 'lockscreen', loadChildren: () => import('./layout/components/pages/lockscreen/app.lockscreen.module').then(m => m.AppLockScreenModule)},
    {path: 'notfound', loadChildren: () => import('./layout/components/pages/notfound/app.notfound.module').then(m => m.AppNotfoundModule)},
    {path: '**', redirectTo: '/notfound'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
