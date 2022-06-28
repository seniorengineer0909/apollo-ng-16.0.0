import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FilterComponent } from './filter.component';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { SliderModule } from 'primeng/slider';
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';
import { CheckboxModule } from 'primeng/checkbox';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		InputTextModule,
		SliderModule,
		ButtonModule,
		InputNumberModule,
		SidebarModule,
		CheckboxModule
	],
	exports: [FilterComponent],
	declarations: [FilterComponent],
})
export class FilterModule { }
