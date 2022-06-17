import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppCheckoutComponent } from './app.checkout.component';
import { AppCheckoutRoutingModule } from './app.checkout-routing.module';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { DropdownModule } from 'primeng/dropdown';

@NgModule({
  imports: [
    CommonModule,
    AppCheckoutRoutingModule,
    FormsModule,
    CheckboxModule,
    DropdownModule,
    InputTextModule,
    InputNumberModule,
    ButtonModule,
    RippleModule
  ],
  declarations: [AppCheckoutComponent]
})
export class AppCheckoutModule { }
