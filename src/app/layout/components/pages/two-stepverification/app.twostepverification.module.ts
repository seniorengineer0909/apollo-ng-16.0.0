import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppTwoStepVerificationRoutingModule } from './app.twostepverification-routing.module';
import { AppTwoStepVerificationComponent } from './app.twostepverification.component';
import { InputNumberModule } from 'primeng/inputnumber';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';

@NgModule({
  imports: [
    CommonModule,
    AppTwoStepVerificationRoutingModule,
    FormsModule,
    InputNumberModule,
    ButtonModule,
    RippleModule
  ],
  declarations: [AppTwoStepVerificationComponent]
})
export class AppTwoStepVerificationModule { }
