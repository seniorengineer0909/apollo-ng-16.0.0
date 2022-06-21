import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppAboutRoutingModule } from './app.about-routing.module';
import { AppAboutComponent } from './app.about.component';

@NgModule({
  imports: [
    CommonModule,
    AppAboutRoutingModule
  ],
  declarations: [AppAboutComponent]
})
export class AppAboutModule { }
