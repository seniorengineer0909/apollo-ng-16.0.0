import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppHelpRoutingModule } from './app.help-routing.module';
import { AppHelpComponent } from './app.help.component';
import { AccordionModule } from 'primeng/accordion';

@NgModule({
  imports: [
    CommonModule,
    AppHelpRoutingModule,
    AccordionModule
  ],
  declarations: [AppHelpComponent]
})
export class AppHelpModule { }
