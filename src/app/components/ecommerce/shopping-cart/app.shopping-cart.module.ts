import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppShoppingCartComponent } from './app.shopping-cart.component';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { RippleModule } from 'primeng/ripple';
import { AppShoppingCartRoutingModule } from './app.shopping-cart-routing.module';

@NgModule({
    imports: [
        CommonModule,
        AppShoppingCartRoutingModule,
        ButtonModule,
        RippleModule,
        DropdownModule,
    ],
    declarations: [AppShoppingCartComponent],
})
export class AppShoppingCartModule { }
