import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';

@Component({
    selector: 'app-shopping-cart',
    templateUrl: './app.shopping-cart.component.html'
})
export class AppShoppingCartComponent implements OnInit {

    constructor() { }

    ngOnInit(): void { }

    quantityOptions: SelectItem[] = [{ label: '1', value: 1 }, { label: '2', value: 2 }, { label: '3', value: 3 }, { label: '4', value: 4 }];
}
