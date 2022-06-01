import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Product } from 'src/app/api/product';
import { BreadcrumbService } from 'src/app/service/app.breadcrumb.service';
import { ProductService } from 'src/app/service/productservice';

interface Create {
    name: string;
}


@Component({
  selector: 'app-app.profilelist',
  templateUrl: './app.profilelist.component.html',
  styleUrls: ['../../../../assets/demo/table.scss']


})

export class AppProfileListComponent implements OnInit {

    selectedProducts: Product[];

    products: any[];

    cols: any[];

    items: MenuItem[];

    product: Product;

    selectedStatus: any[];

    statuses: any[];


    constructor(private productService: ProductService, private breadcrumbService: BreadcrumbService) {
      this.breadcrumbService.setItems([
        { label: 'Profile List' }
      ]);
    }

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
