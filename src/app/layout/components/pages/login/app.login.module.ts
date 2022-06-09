import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppLoginRoutingModule } from './app.login-routing.module';
import { AppLoginComponent } from './app.login.component';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { PasswordModule } from 'primeng/password';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    AppLoginRoutingModule,
    ButtonModule,
    InputTextModule,
    PasswordModule,
    CheckboxModule,
    FormsModule

  ],
  declarations: [AppLoginComponent]
})
export class AppLoginModule { }
