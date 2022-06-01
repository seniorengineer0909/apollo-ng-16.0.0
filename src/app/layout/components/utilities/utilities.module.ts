import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconsComponent } from './icons.component';
import { UtilitiesRoutingModule } from './utilities-routing.module';
import { AppCodeModule } from '../primeblocks/app-code/app.code.component';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
  imports: [
    CommonModule,
    UtilitiesRoutingModule,
    AppCodeModule,
    InputTextModule,
  ],
  declarations: [IconsComponent]
})
export class UtilitiesModule { }
