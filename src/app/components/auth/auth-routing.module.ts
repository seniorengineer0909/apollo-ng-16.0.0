import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [RouterModule.forChild([
        { path: 'error', loadChildren: () => import('./error/app.error.module').then(m => m.AppErrorModule) },
        { path: 'access', loadChildren: () => import('./accessdenied/app.accessdenied.module').then(m => m.AppAccessdeniedModule) },
        { path: 'login', loadChildren: () => import('./login/app.login.module').then(m => m.AppLoginModule) },
        { path: 'forgotpassword', loadChildren: () => import('./forgotpassword/app.forgotpassword.module').then(m => m.AppForgotPasswordModule) },
        { path: 'register', loadChildren: () => import('./register/app.register.module').then(m => m.AppRegisterModule) },
        { path: 'newpassword', loadChildren: () => import('./newpassword/app.newpassword.module').then(m => m.AppNewPasswordModule) },
        { path: 'verification', loadChildren: () => import('./verification/app.verification.module').then(m => m.AppVerificationModule) },
        { path: 'lockscreen', loadChildren: () => import('./lockscreen/app.lockscreen.module').then(m => m.AppLockScreenModule) }
    ])],
    exports: [RouterModule]
})
export class AuthRoutingModule { }
