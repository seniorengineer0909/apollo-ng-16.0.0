import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppEmailVerificationRoutingModule } from './app.emailverification-routing.module';
import { AppEmailVerificationComponent } from './app.emailverification.component';
import { InputNumberModule } from 'primeng/inputnumber';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple'; 


@NgModule({
  imports: [
    CommonModule,
    AppEmailVerificationRoutingModule,
    FormsModule,
    InputNumberModule,
    ButtonModule,
    RippleModule
  ],
  declarations: [AppEmailVerificationComponent]
})
export class AppEmailverificationModule { }
