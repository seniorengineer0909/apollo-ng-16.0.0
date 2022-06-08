import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppAccessdeniedRoutingModule } from './app.accessdenied-routing.module';
import { AppAccessdeniedComponent } from './app.accessdenied.component'
import { ButtonModule } from 'primeng/button';

@NgModule({
  imports: [
    CommonModule,
    AppAccessdeniedRoutingModule,
    ButtonModule
  ],
  declarations: [AppAccessdeniedComponent]
})
export class AppAccessdeniedModule { }
