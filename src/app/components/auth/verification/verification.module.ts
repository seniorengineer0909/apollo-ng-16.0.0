import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { VerificationRoutingModule } from './verification-routing.module';
import { VerificationComponent } from './verification.component';
import { InputNumberModule } from 'primeng/inputnumber';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';

@NgModule({
    imports: [
        CommonModule,
        VerificationRoutingModule,
        FormsModule,
        InputNumberModule,
        ButtonModule,
        RippleModule
    ],
    declarations: [VerificationComponent]
})
export class VerificationModule { }
