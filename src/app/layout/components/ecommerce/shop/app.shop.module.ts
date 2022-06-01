import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppShopComponent } from './app.shop.component';
import { AppShopRoutingModule } from './app.shop-routing.module';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { RippleModule } from 'primeng/ripple';
import { DataViewModule } from 'primeng/dataview';
import { RatingModule } from 'primeng/rating';
import { ShoppingCartModule } from '../shopping-cart/shopping-cart.module';
import { FilterModule } from '../filter/filter.module';

@NgModule({
  imports: [
    CommonModule,
    AppShopRoutingModule,
    InputTextModule,
    FormsModule,
    ButtonModule,
    DropdownModule,
    FilterModule,
    ShoppingCartModule,
    DataViewModule,
    RatingModule,
    RippleModule
  ],
  declarations: [AppShopComponent]
})
export class AppShopModule { }
