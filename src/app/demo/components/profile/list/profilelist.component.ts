import { Component, OnInit } from '@angular/core';
import { Table } from 'primeng/table';
import { Customer } from 'src/app/demo/api/customer';
import { CustomerService } from 'src/app/demo/service/customer.service';

@Component({
    templateUrl: './profilelist.component.html'
})
export class ProfileListComponent implements OnInit {

    customers: Customer[] = [];

    constructor(private customerService: CustomerService) { }

    ngOnInit() {
        this.customerService.getCustomersLarge().then(customers => this.customers = customers);
    }

    onGlobalFilter(table: Table, event: Event) {
        table.filterGlobal((event.target as HTMLInputElement).value, 'contains')
    }

}