import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForgotPasswordRoutingModule } from './forgotpassword-routing.module';
import { ForgotPasswordComponent } from './forgotpassword.component';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
    imports: [
        CommonModule,
        ButtonModule,
        InputTextModule,
        ForgotPasswordRoutingModule
    ],
    declarations: [ForgotPasswordComponent]
})
export class ForgotPasswordModule { }