import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppErrorRoutingModule } from './app.error-routing.module';
import { AppErrorComponent } from './app.error.component';
import { ButtonModule } from 'primeng/button';

@NgModule({
  imports: [
    CommonModule,
    AppErrorRoutingModule,
    ButtonModule
  ],
  declarations: [AppErrorComponent]
})
export class AppErrorModule { }
