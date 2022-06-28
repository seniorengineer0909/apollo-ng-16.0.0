import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'product-filter',
	templateUrl: './filter.component.html',
	styleUrls: ['./filter.component.scss']
})

export class FilterComponent {

	@Input() display: boolean = false;

	@Output() onFilterClose = new EventEmitter();

	selectedFilters: string[] = ['Alfred', 'Men', 'Kids', 'Black'];

	priceRanges: number[] = [10, 12000];

	genderOptions: any[] = [
		{ name: 'Men', value: 42 },
		{ name: 'Women', value: 16 },
		{ name: 'Kids', value: 7 }
	];ß

	brandOptions: any[] = [
		{ name: 'Alfred', value: 42 },
		{ name: 'Hyper', value: 16 },
		{ name: 'Bastion', value: 7 },
		{ name: 'Peak', value: 36 }
	];

	colorOptions: any[] = [
		{ name: 'Black', background: "bg-gray-900" },
		{ name: 'Orange', background: "bg-orange-500" },
		{ name: 'Navy', background: "bg-blue-500" },
		{ name: 'Indigo', background: "bg-indigo-500" },
		{ name: 'Pink', background: "bg-pink-500" },
		{ name: 'Green', background: "bg-green-500" },
		{ name: 'Blue', background: "bg-blue-500" },
	];

	clear() {
		this.selectedFilters = [];
	}

	onColorSelect(color) {
		this.selectedFilters.indexOf(color) == -1 ? this.selectedFilters.push(color) : this.selectedFilters.splice(this.selectedFilters.indexOf(color), 1)
	}
}
