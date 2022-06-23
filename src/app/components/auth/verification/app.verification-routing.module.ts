import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppVerificationComponent } from './app.verification.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: AppVerificationComponent }
    ])],
    exports: [RouterModule]
})
export class AppVerificationRoutingModule { }