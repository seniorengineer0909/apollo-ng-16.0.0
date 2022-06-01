import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from 'src/app/service/app.breadcrumb.service';
import { Product } from 'src/app/api/product';
import { ProductService } from 'src/app/service/productservice';
import { MenuItem } from 'primeng/api';

@Component({
    selector: 'app-app.productlist',
    templateUrl: './app.productlist.component.html',
    styleUrls: ['../../../../assets/demo/table.scss', '../../../../assets/demo/badges.scss']
})
export class AppProductListComponent implements OnInit {
    
    items: MenuItem[];

    products: Product[];

    product: Product;

    selectedProducts: Product[];

    cols: any[];

    statuses: any[];

    rowsPerPageOptions = [5, 10, 20];

    constructor(private productService: ProductService, private breadcrumbService: BreadcrumbService) {
      this.breadcrumbService.setItems([
        { label: 'Product List' }
      ]);
    }

    ngOnInit(): void {
      this.productService.getProducts().then(data => this.products = data);
      
      this.items = [
        {label: 'Edit', icon: 'pi pi-fw pi-pencil'},
        {label: 'New Product', icon: 'pi pi-fw pi-plus'},
        {label: 'Delete', icon: 'pi pi-fw pi-trash'},
      ];

      this.cols = [
        {field: 'porduct', header: 'Product'},
        {field: 'price', header: 'Price'},
        {field: 'rating', header: 'Rating'},
        {field: 'trackingId', header: 'Tracking ID'},
        {field: 'date', header: 'Date'},
        {field: 'inventoryStatus', header: 'Status'}
      ];

      this.statuses = [
        {label: 'INSTOCK', value: 'instock'},
        {label: 'LOWSTOCK', value: 'lowstock'},
        {label: 'OUTOFSTOCK', value: 'outofstock'}
      ];
    }

    findIndexById(id: string): number {
      let index = -1;
      for (let i = 0; i < this.products.length; i++) {
          if (this.products[i].id === id) {
              index = i;
              break;
          }
      }

      return index;
    }
}