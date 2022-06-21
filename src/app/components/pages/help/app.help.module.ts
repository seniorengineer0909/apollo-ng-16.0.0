import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppHelpRoutingModule } from './app.help-routing.module';
import { AppHelpComponent } from './app.help.component';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
  imports: [
    CommonModule,
    AppHelpRoutingModule,
    InputTextModule
  ],
  declarations: [AppHelpComponent]
})
export class AppHelpModule { }
