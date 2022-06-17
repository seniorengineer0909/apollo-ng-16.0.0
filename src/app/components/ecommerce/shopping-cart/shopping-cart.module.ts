import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ShoppingCartComponent } from './shopping-cart.component';
import { InputNumberModule } from 'primeng/inputnumber';
import { ButtonModule } from 'primeng/button';
import { StyleClassModule } from 'primeng/styleclass';
import { RippleModule } from 'primeng/ripple';
import { DividerModule } from 'primeng/divider';
import { SidebarModule } from 'primeng/sidebar';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    InputNumberModule,
    ButtonModule,
    SidebarModule,
    StyleClassModule,
    RippleModule,
    DividerModule    
  ],
  exports: [ShoppingCartComponent],
  declarations: [ShoppingCartComponent],
})
export class ShoppingCartModule { }
