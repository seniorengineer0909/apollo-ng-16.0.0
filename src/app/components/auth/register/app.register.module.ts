import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppRegisterRoutingModule } from './app.register-routing.module';
import { AppRegisterComponent } from './app.register.component';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';


@NgModule({
  imports: [
    CommonModule,
    AppRegisterRoutingModule,
    FormsModule,
    ButtonModule,
    RippleModule,
    InputTextModule,
    CheckboxModule
  ],
  declarations: [AppRegisterComponent]
})
export class AppRegisterModule { }
