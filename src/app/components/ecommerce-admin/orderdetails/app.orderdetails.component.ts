import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/api/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
    selector: 'app-app.orderdetails',
    templateUrl: './app.orderdetails.component.html'
})
export class AppOrderDetailsComponent implements OnInit {

    products: Product[];

    cols: any[];

    events: any[];

    constructor(private productService: ProductService) {}

    ngOnInit(): void {
      this.productService.getProductsWithOrdersLarge().then(data => this.products = data.filter(i => i.quantity !== 0).map(item => ({...item, total: item.quantity * item.price})).slice(0,6));

      this.cols = [
        {field: 'porduct', header: 'Product'},
        {field: 'price', header: 'Price'},
        {field: 'quantity', header: 'Quantity'},
        {field: 'Total', header: 'Total'},
        {field: 'date', header: 'Date'},
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
