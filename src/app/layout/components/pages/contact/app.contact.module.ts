import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppContactComponent } from './app.contact.component';
import { AppContactRoutingModule } from './app.contact-routing.module';
import { GMapModule } from 'primeng/gmap';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    GMapModule,
    ButtonModule,
    AppContactRoutingModule,
    InputTextModule,
    InputTextareaModule
  ],
  declarations: [AppContactComponent]
})
export class AppContactModule { }
