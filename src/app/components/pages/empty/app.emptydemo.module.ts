import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppEmptyDemoRoutingModule } from './app.emptydemo-routing.module';
import { AppEmptyDemoComponent } from './app.emptydemo.component';

@NgModule({
  imports: [
    CommonModule,
    AppEmptyDemoRoutingModule
  ],
  declarations: [AppEmptyDemoComponent]
})
export class AppEmptyDemoModule { }
