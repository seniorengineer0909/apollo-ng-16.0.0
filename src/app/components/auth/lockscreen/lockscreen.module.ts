import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LockScreenRoutingModule } from './lockscreen-routing.module';
import { LockScreenComponent } from './lockscreen.component';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        LockScreenRoutingModule,
        InputTextModule,
        ButtonModule,
        RippleModule
    ],
    declarations: [LockScreenComponent]
})
export class LockScreenModule { }
