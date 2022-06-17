import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppFaqComponent } from './app.faq.component';
import { AppFaqRoutingModule } from './app.faq-routing.module';
import { MenuModule } from 'primeng/menu';
import { RippleModule } from 'primeng/ripple';
@NgModule({
  imports: [
    CommonModule,
    AppFaqRoutingModule,
    MenuModule,
    RippleModule,
  ],
  declarations: [AppFaqComponent]
})
export class AppFaqModule { }
