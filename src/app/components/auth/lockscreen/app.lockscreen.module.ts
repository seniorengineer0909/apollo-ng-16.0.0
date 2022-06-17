import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppLockScreenRoutingModule } from './app.lockscreen-routing.module';
import { AppLockScreenComponent } from './app.lockscreen.component';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AppLockScreenRoutingModule,
    InputTextModule,
    ButtonModule,
    RippleModule
  ],
  declarations: [AppLockScreenComponent],
})
export class AppLockScreenModule { }
