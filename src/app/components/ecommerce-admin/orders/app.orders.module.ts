import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppOrdersRoutingModule } from './app.orders-routing.module';
import { AppOrdersComponent } from './app.orders.component';
import { CheckboxModule } from 'primeng/checkbox';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { MenuModule } from 'primeng/menu';
import { AvatarModule } from 'primeng/avatar';

@NgModule({
  imports: [
    CommonModule,
    AppOrdersRoutingModule,
    CheckboxModule,
    TableModule,
    ButtonModule,
    RippleModule,
    InputTextModule,
    DropdownModule,
    AvatarModule,
    MenuModule
  ],
  declarations: [AppOrdersComponent],
})
export class AppOrdersModule { }
