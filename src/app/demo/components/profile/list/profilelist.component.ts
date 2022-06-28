import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/demo/components/api/customer';
import { CustomerService } from 'src/app/demo/components/service/customer.service';

@Component({
    templateUrl: './profilelist.component.html'
})
export class ProfileListComponent implements OnInit {

    customers: Customer[];

    constructor(private customerService: CustomerService) { }

    ngOnInit() {
        this.customerService.getCustomersLarge().then(customers => this.customers = customers);
    }

}