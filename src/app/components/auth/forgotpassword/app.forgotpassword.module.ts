import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppForgotPasswordRoutingModule } from './app.forgotpassword-routing.module';
import { AppForgotPasswordComponent } from './app.forgotpassword.component';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
  imports: [
    CommonModule,
    ButtonModule,
    InputTextModule,
    AppForgotPasswordRoutingModule
  ],
  declarations: [AppForgotPasswordComponent]
})
export class AppForgotPasswordModule { }
