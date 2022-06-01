import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppNotfoundRoutingModule } from './app.notfound-routing.module';
import { AppNotfoundComponent } from './app.notfound.component';

@NgModule({
  imports: [
    CommonModule,
    AppNotfoundRoutingModule
  ],
  declarations: [AppNotfoundComponent]
})
export class AppNotfoundModule { }
