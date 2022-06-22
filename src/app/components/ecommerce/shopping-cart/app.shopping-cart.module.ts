import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppShoppingCartComponent } from './app.shopping-cart.component';
import { InputNumberModule } from 'primeng/inputnumber';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { StyleClassModule } from 'primeng/styleclass';
import { RippleModule } from 'primeng/ripple';
import { DividerModule } from 'primeng/divider';
import { SidebarModule } from 'primeng/sidebar';
import { AppShoppingCartRoutingModule } from './app.shopping-cart-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AppShoppingCartRoutingModule,
    InputNumberModule,
    ButtonModule,
    SidebarModule,
    StyleClassModule,
    RippleModule,
    DropdownModule,
    DividerModule    
  ],
  declarations: [AppShoppingCartComponent],
})
export class AppShoppingCartModule { }
