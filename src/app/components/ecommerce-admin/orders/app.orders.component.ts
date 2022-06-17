import { Component, OnInit} from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Product } from 'src/app/api/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
    selector: 'app-app.orders',
    templateUrl: './app.orders.component.html'
})
export class AppOrdersComponent implements OnInit {

    selectedProducts: Product[];

    products: any[];

    cols: any[];

    items: MenuItem[];

    product: Product;

    selectedStatus: any[];

    statuses: any[];

    constructor(private productService: ProductService) {}

    ngOnInit(): void {
      this.productService.getProductsWithOrdersLarge().then(data => this.products = data.filter(i => i.quantity !== 0).map((el,index) => ({...el, total: el.quantity * el.price, paymentMethod: index % 2 === 0 ? 'Visa' : 'Mastercard', verified: index % 2 === 0 ? 'Yes' : 'No', status: index % 2 === 0 ? 'Completed' : 'Cancelled'})));

      this.cols = [
        {field: 'product', header: 'Product'},
        {field: 'price', header: 'Price'},
        {field: 'quantity', header: 'Quantity'},
        {field: 'Total', header: 'Total'},
        {field: 'date', header: 'Date'},
      ];

      this.items = [
        {label: 'Edit', icon: 'pi pi-fw pi-pencil'},
        {label: 'Delete', icon: 'pi pi-fw pi-trash'},
      ];

      this.statuses = [{value: 'Cancelled'}, {value: 'Completed'}];
    }

}
