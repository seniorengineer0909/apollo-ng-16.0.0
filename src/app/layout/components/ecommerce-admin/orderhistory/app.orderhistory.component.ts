import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/api/product';
import { BreadcrumbService } from 'src/app/service/app.breadcrumb.service';
import { ProductService } from 'src/app/service/productservice';

@Component({
    selector: 'app-app.orderhistory',
    templateUrl: './app.orderhistory.component.html',
    styleUrls: ['../../../../assets/demo/table.scss']
})
export class AppOrderHistoryComponent implements OnInit {
    
    products: Product[];
    
    cols: any[];

    events: any[];

    constructor(private productService: ProductService, private breadcrumbService: BreadcrumbService) {
      this.breadcrumbService.setItems([
        { label: 'Order History' }
      ]);
    }

    ngOnInit() {
      this.productService.getProductsWithOrdersLarge().then(data => this.products = data.filter(i => i.quantity !== 0).map((el,index) => ({...el, total: el.quantity * el.price, paymentMethod: index % 2 === 0 ? 'Visa' : 'Mastercard', verified: index % 2 === 0 ? 'Yes' : 'No', status: index % 2 === 0 ? 'Completed' : 'Cancelled', date: '28/02/2022'})));

      this.cols = [
        {field: 'date', header: 'Date'},
        {field: 'comment', header: 'Comment'},
        {field: 'status', header: 'Status'}
      ];

      this.events = [
        {status: 'Ordered', date: '15/04/2022 10:30', completed: true, current: false},
        {status: 'Processing', date: '19/04/2022 14:00', completed: true, current: true},
        {status: 'Preapring to Shipping', date: '20/04/2022 14:00', completed: false, current: false},
        {status: 'Sent', date: '20/04/2022 16:15', completed: false, current: false},
        {status: 'Delivered', date: '22/04/2022 10:00', completed: false, current: false}
      ];
    }
}
