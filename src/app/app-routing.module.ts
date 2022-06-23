import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppLayoutComponent } from './layout/app.layout.component';

const routes: Routes = [
    {
        path: '', component: AppLayoutComponent,
        children: [
            { path: '', loadChildren: () => import('./components/dashboards/dashboards.module').then(m => m.DashboardsModule) },
            { path: 'uikit', data: { breadcrumb: 'UI Kit' }, loadChildren: () => import('./components/uikit/uikit.module').then(m => m.UIkitModule) },
            { path: 'utilities', data: { breadcrumb: 'Utilities' }, loadChildren: () => import('./components/utilities/utilities.module').then(m => m.UtilitiesModule) },
            { path: 'pages', data: { breadcrumb: 'Pages' }, loadChildren: () => import('./components/pages/pages.module').then(m => m.PagesModule) },
            { path: 'profile', data: { breadcrumb: 'User Management' }, loadChildren: () => import('./components/profile/profile.module').then(m => m.ProfileModule) },
            { path: 'documentation', data: { breadcrumb: 'Documentation' }, loadChildren: () => import('./components/start/start.module').then(m => m.StartModule) },
            { path: 'blocks', data: { breadcrumb: 'Prime Blocks' }, loadChildren: () => import('./components/primeblocks/primeblocks.module').then(m => m.PrimeBlocksModule) },
            { path: 'blog', data: { breadcrumb: 'Blog' }, loadChildren: () => import('./components/apps/blog/blog.module').then(m => m.BlogModule) },
            { path: 'ecommerce', data: { breadcrumb: 'E-Commerce' }, loadChildren: () => import('./components/ecommerce/app.ecommerce.module').then(m => m.AppEcommerceModule) },
            { path: 'apps', data: { breadcrumb: 'Apps' }, loadChildren: () => import('./components/apps/apps.module').then(m => m.AppsModule) }
        ]
    },
    { path: 'landing', loadChildren: () => import('./components/landing/app.landing.module').then(m => m.AppLandingModule) },
    { path: 'error', loadChildren: () => import('./components/auth/error/app.error.module').then(m => m.AppErrorModule) },
    { path: 'access', loadChildren: () => import('./components/auth/accessdenied/app.accessdenied.module').then(m => m.AppAccessdeniedModule) },
    { path: 'login', loadChildren: () => import('./components/auth/login/app.login.module').then(m => m.AppLoginModule) },
    { path: 'forgotpassword', loadChildren: () => import('./components/auth/forgotpassword/app.forgotpassword.module').then(m => m.AppForgotPasswordModule) },
    { path: 'register', loadChildren: () => import('./components/auth/register/app.register.module').then(m => m.AppRegisterModule) },
    { path: 'newpassword', loadChildren: () => import('./components/auth/newpassword/app.newpassword.module').then(m => m.AppNewPasswordModule) },
    { path: 'verification', loadChildren: () => import('./components/auth/verification/app.verification.module').then(m => m.AppVerificationModule) },
    { path: 'lockscreen', loadChildren: () => import('./components/auth/lockscreen/app.lockscreen.module').then(m => m.AppLockScreenModule) },
    { path: 'notfound', loadChildren: () => import('./components/auth/notfound/app.notfound.module').then(m => m.AppNotfoundModule) },
    { path: '**', redirectTo: '/notfound' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
