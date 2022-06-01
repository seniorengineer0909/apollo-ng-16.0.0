import { Component } from '@angular/core';
import { BreadcrumbService } from 'src/app/service/app.breadcrumb.service';

@Component({
    selector: 'app-checkout',
    templateUrl: './app.checkout.component.html',
})
export class AppCheckoutComponent {

    quantities: number[] = [1, 1, 1];

    value: string;

    checked: boolean = true;

    checked2: boolean = true;
    
    cities = [
      {name: 'New York', code: 'NY'},
      {name: 'Rome', code: 'RM'},
      {name: 'London', code: 'LDN'},
      {name: 'Istanbul', code: 'IST'},
      {name: 'Paris', code: 'PRS'}
    ];
    
    selectedCity: string;
    
    constructor(private breadcrumbService: BreadcrumbService) {
      this.breadcrumbService.setItems([
        {label: 'Checkout'},
      ]);
    }
}
