import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppNotfoundRoutingModule } from './app.notfound-routing.module';
import { AppNotfoundComponent } from './app.notfound.component';
import { ButtonModule } from 'primeng/button';

@NgModule({
  imports: [
    CommonModule,
    AppNotfoundRoutingModule,
    ButtonModule

  ],
  declarations: [AppNotfoundComponent]
})
export class AppNotfoundModule { }
