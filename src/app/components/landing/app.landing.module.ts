import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppLandingRoutingModule } from './app.landing-routing.module';
import { AppLandingComponent } from './app.landing.component';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { PasswordModule } from 'primeng/password';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    AppLandingRoutingModule,
    ButtonModule,
    InputTextModule,
    PasswordModule,
    CheckboxModule,
    FormsModule

  ],
  declarations: [AppLandingComponent]
})
export class AppLoginModule { }
