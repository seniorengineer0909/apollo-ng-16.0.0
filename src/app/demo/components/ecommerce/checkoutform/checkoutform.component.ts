import { Component } from '@angular/core';

@Component({
    templateUrl: './checkoutform.component.html',
})
export class CheckoutFormComponent {

    quantities: number[] = [1, 1, 1];

    value: string = '';

    checked: boolean = true;

    checked2: boolean = true;

    cities = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];

    selectedCity: string = '';

}
