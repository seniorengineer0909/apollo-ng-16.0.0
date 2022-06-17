import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppNewPasswordComponent } from './app.newpassword.component';
import { AppNewPasswordRoutingModule } from './app.newpassword-routing.module';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { RippleModule } from 'primeng/ripple';

@NgModule({
  imports: [
    CommonModule,
    AppNewPasswordRoutingModule,
    FormsModule,
    ButtonModule,
    InputTextModule,
    RippleModule
  ],
  declarations: [AppNewPasswordComponent],
})
export class AppNewPasswordModule { }
