import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppAccessdeniedRoutingModule } from './app.accessdenied-routing.module';
import { AppAccessdeniedComponent } from './app.accessdenied.component'

@NgModule({
  imports: [
    CommonModule,
    AppAccessdeniedRoutingModule
  ],
  declarations: [AppAccessdeniedComponent]
})
export class AppAccessdeniedModule { }
