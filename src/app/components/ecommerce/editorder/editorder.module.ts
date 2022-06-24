import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EditOrderRoutingModule } from './editorder-routing.module';
import { EditOrderComponent } from './editorder.component';
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
        EditOrderRoutingModule,
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
    declarations: [EditOrderComponent]
})
export class EditOrderModule { }
