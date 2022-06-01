import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppAboutRoutingModule } from './app.about-routing.module';
import { AppAboutComponent } from './app.about.component';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';

@NgModule({
  imports: [
    CommonModule,
    AppAboutRoutingModule,
    CardModule,
    ButtonModule,
    RippleModule
  ],
  declarations: [AppAboutComponent]
})
export class AppAboutModule { }
