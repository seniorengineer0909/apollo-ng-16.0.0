import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/api/product';
import { BreadcrumbService } from 'src/app/service/app.breadcrumb.service';
import { ProductService } from 'src/app/service/productservice';

@Component({
    selector: 'app-app.orderedit',
    templateUrl: './app.orderedit.component.html',
    styleUrls: ['../../../../assets/demo/table.scss', '../../../../assets/demo/badges.scss']
})
export class AppOrderEditComponent implements OnInit {
      
    products: Product[];
      
    cols: any[];

    paymentMethods: any[];
    
    shippingMethods: any[];

    orderDates: any[];

    selectedPayment: any;

    selectedDate: any;

    selectedShipping: any;

    quantities1: number[] = [1, 1, 1];
    
    constructor(private productService: ProductService, private breadcrumbService: BreadcrumbService) {
      this.breadcrumbService.setItems([
        { label: 'Edit Order' }
      ]);
    }

    ngOnInit() {
      this.productService.getProductsWithOrdersLarge().then(data => this.products = data.filter(i => i.quantity !== 0));
      this.cols = [
        {field: 'name', header: 'Product'},
        {field: 'price', header: 'Price'},
        {field: 'status', header: 'Status'}
      ];
      
      this.paymentMethods = [
        {name: 'Visa'},
        {name: 'Mastercard'},
        {name: 'Amex'}
      ];

      this.shippingMethods = [
        {name: 'Air'},
        {name: 'Sea'},
        {name: 'Land'},
      ];

      this.orderDates = [
        {date: '15/04/22'},
        {date: '16/04/22'},
        {date: '17/04/22'},
      ];
    }
}
