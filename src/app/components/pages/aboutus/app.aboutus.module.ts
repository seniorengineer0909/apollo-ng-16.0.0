import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppAboutUsRoutingModule } from './app.aboutus-routing.module';
import { AppAboutUsComponent } from './app.aboutus.component';

@NgModule({
  imports: [
    CommonModule,
    AppAboutUsRoutingModule
  ],
  declarations: [AppAboutUsComponent]
})
export class AppAboutUsModule { }
