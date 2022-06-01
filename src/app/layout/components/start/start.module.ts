import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentationComponent } from './documentation/documentation.component';
import { StartRoutingModule } from './start-routing.module';
import { AppCodeModule } from '../primeblocks/app-code/app.code.component';

@NgModule({
  imports: [
    CommonModule,
    AppCodeModule,
    StartRoutingModule
  ],
  declarations: [DocumentationComponent]
})
export class StartModule { }
