import {Component} from '@angular/core';
import {BreadcrumbService} from 'src/app/layout/service/app.breadcrumb.service';


@Component({
    templateUrl: './app.invoice.component.html',
    styleUrls: ['./app.invoice.component.scss']
})
export class AppInvoiceComponent {

    constructor(private breadcrumbService: BreadcrumbService) {
        this.breadcrumbService.setItems([
            {label: 'Invoice'}
        ]);
    }

    print() {
        window.print();
    }

    tableData = [
        {name: 'Creative Design', date: '29 Jul 2021', hours: '80h', rate: '$40.00', amount: '$920.34'},
        {name: 'Logo Design', date: '29 Jul 2021', hours: '10h', rate: '$20.00', amount: '$834.12'},
        {name: 'Web Development', date: '29 Jul 2021', hours: '7h', rate: '$60.00', amount: '$340.20'},
        {name: 'Logo Design', date: '29 Jul 2021', hours: '72h', rate: '$20.00', amount: '$834.12'}
    ]
}
