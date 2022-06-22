import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppProductListRoutingModule } from './app.productlist-routing.module';
import { AppProductListComponent } from './app.productlist.component';
import { RippleModule } from 'primeng/ripple';

@NgModule({
    imports: [
        CommonModule,
        AppProductListRoutingModule,
        RippleModule
    ],
    declarations: [AppProductListComponent]
})
export class AppProductListModule { }
