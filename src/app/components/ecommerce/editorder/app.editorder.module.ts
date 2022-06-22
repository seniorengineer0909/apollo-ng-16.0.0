import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppEditOrderRoutingModule } from './app.editorder-routing.module';
import { AppEditOrderComponent } from './app.editorder.component';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';
import { TableModule } from 'primeng/table';
import { CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { DividerModule } from 'primeng/divider';

@NgModule({
    imports: [
        CommonModule,
        AppEditOrderRoutingModule,
        InputTextModule,
        DropdownModule,
        InputNumberModule,
        TableModule,
        CheckboxModule,
        FormsModule,
        ButtonModule,
        RippleModule,
        DividerModule
    ],
    declarations: [AppEditOrderComponent]
})
export class AppEditOrderModule { }
