import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppVerificationRoutingModule } from './app.verification-routing.module';
import { AppVerificationComponent } from './app.verification.component';
import { InputNumberModule } from 'primeng/inputnumber';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';

@NgModule({
    imports: [
        CommonModule,
        AppVerificationRoutingModule,
        FormsModule,
        InputNumberModule,
        ButtonModule,
        RippleModule
    ],
    declarations: [AppVerificationComponent]
})
export class AppVerificationModule { }
