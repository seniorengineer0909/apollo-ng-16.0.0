import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from 'src/app/service/app.breadcrumb.service';
import { MenuItem, SelectItem } from 'primeng/api';

@Component({
    selector: 'app-shop',
    templateUrl: './app.shop.component.html',
    styleUrls: ['./app.shop.component.scss']
})
export class AppShopComponent implements OnInit {

    products: any[];

    colors: any[];

    selectedColor: any;

    sortOptions: SelectItem[];

    sortOrder: number;

    sortField: string;

    filterVisible: boolean = false;

    constructor(private breadcrumbService: BreadcrumbService) {
      this.breadcrumbService.setItems([
        {label: 'Shop'},
      ]);
    }

    ngOnInit(): void {
      this.products = [
        {active: false, title:'Product Name', price: '$321', discount: '%15', sale_price: '$123', image:'shop-1', rating: 4},
        {active: false, title:'Superturf Adventure X Atmos', price: '$321.00', discount: '%25', sale_price: '$123.00', image:'shop-2', rating: 3},
        {active: false, title:'Product Name', price: '$321.00', discount: '%15', sale_price: '$123.00', image:'shop-3'},
        {active: false, title:'2750 Cotu Classic Sneaker', price: '$321.00', discount: '%15', sale_price: '$123.00', image:'shop-4', rating: 5},
        {active: false, title:'Product Name', price: '$321.00', discount: '%15', sale_price: '$123.00', image:'shop-5', rating: 4},
        {active: false, title:'2750 Cotu Classic Sneaker', price: '$321.00', discount: '%15', sale_price: '$123.00', image:'shop-6', rating: 4},
        {active: false, title:'Product Name', price: '$321.00', discount: '%15', sale_price: '$123.00', image:'shop-1', rating: 5},
        {active: false, title:'Superturf Adventure X Atmos', price: '$321.00', discount: '%15', sale_price: '$123.00', image:'shop-2', rating: 5},
        {active: false, title:'Product Name', price: '$321', discount: '%15', sale_price: '$123', image:'shop-1', rating: 4},
        {active: false, title:'Superturf Adventure X Atmos', price: '$321.00', discount: '%25', sale_price: '$123.00', image:'shop-2', rating: 3},
        {active: false, title:'Product Name', price: '$321.00', discount: '%15', sale_price: '$123.00', image:'shop-3'},
        {active: false, title:'2750 Cotu Classic Sneaker', price: '$321.00', discount: '%15', sale_price: '$123.00', image:'shop-4', rating: 5},
        {active: false, title:'Product Name', price: '$321.00', discount: '%15', sale_price: '$123.00', image:'shop-5'},
        {active: false, title:'2750 Cotu Classic Sneaker', price: '$321.00', discount: '%15', sale_price: '$123.00', image:'shop-6', rating: 4},
        {active: false, title:'Product Name', price: '$321.00', discount: '%15', sale_price: '$123.00', image:'shop-1', rating: 5},
        {active: false, title:'Superturf Adventure X Atmos', price: '$321.00', discount: '%15', sale_price: '$123.00', image:'shop-2', rating: 5},
        {active: false, title:'Product Name', price: '$321', discount: '%15', sale_price: '$123', image:'shop-1', rating: 4},
        {active: false, title:'Superturf Adventure X Atmos', price: '$321.00', discount: '%25', sale_price: '$123.00', image:'shop-2', rating: 3},
        {active: false, title:'Product Name', price: '$321.00', discount: '%15', sale_price: '$123.00', image:'shop-3'},
        {active: false, title:'2750 Cotu Classic Sneaker', price: '$321.00', discount: '%15', sale_price: '$123.00', image:'shop-4', rating: 5},
        {active: false, title:'Product Name', price: '$321.00', discount: '%15', sale_price: '$123.00', image:'shop-5'},
        {active: false, title:'2750 Cotu Classic Sneaker', price: '$321.00', discount: '%15', sale_price: '$123.00', image:'shop-6', rating: 4},
        {active: false, title:'Product Name', price: '$321.00', discount: '%15', sale_price: '$123.00', image:'shop-1', rating: 5},
        {active: false, title:'Superturf Adventure X Atmos', price: '$321.00', discount: '%15', sale_price: '$123.00', image:'shop-2', rating: 5},
        {active: false, title:'Product Name', price: '$321', discount: '%15', sale_price: '$123', image:'shop-1', rating: 4},
        {active: false, title:'Superturf Adventure X Atmos', price: '$321.00', discount: '%25', sale_price: '$123.00', image:'shop-2', rating: 3},
        {active: false, title:'Product Name', price: '$321.00', discount: '%15', sale_price: '$123.00', image:'shop-3'},
        {active: false, title:'2750 Cotu Classic Sneaker', price: '$321.00', discount: '%15', sale_price: '$123.00', image:'shop-4', rating: 5},
        {active: false, title:'Product Name', price: '$321.00', discount: '%15', sale_price: '$123.00', image:'shop-5'},
        {active: false, title:'2750 Cotu Classic Sneaker', price: '$321.00', discount: '%15', sale_price: '$123.00', image:'shop-6', rating: 4},
        {active: false, title:'Product Name', price: '$321.00', discount: '%15', sale_price: '$123.00', image:'shop-1', rating: 5},
        {active: false, title:'Superturf Adventure X Atmos', price: '$321.00', discount: '%15', sale_price: '$123.00', image:'shop-2', rating: 5},
        {active: false, title:'Product Name', price: '$321', discount: '%15', sale_price: '$123', image:'shop-1', rating: 4},
        {active: false, title:'Superturf Adventure X Atmos', price: '$321.00', discount: '%25', sale_price: '$123.00', image:'shop-2', rating: 3},
        {active: false, title:'Product Name', price: '$321.00', discount: '%15', sale_price: '$123.00', image:'shop-3'},
        {active: false, title:'2750 Cotu Classic Sneaker', price: '$321.00', discount: '%15', sale_price: '$123.00', image:'shop-4', rating: 5},
        {active: false, title:'Product Name', price: '$321.00', discount: '%15', sale_price: '$123.00', image:'shop-5'},
        {active: false, title:'2750 Cotu Classic Sneaker', price: '$321.00', discount: '%15', sale_price: '$123.00', image:'shop-6', rating: 4},
        {active: false, title:'Product Name', price: '$321.00', discount: '%15', sale_price: '$123.00', image:'shop-1', rating: 5},
        {active: false, title:'Superturf Adventure X Atmos', price: '$321.00', discount: '%15', sale_price: '$123.00', image:'shop-2', rating: 5},
        {active: false, title:'Product Name', price: '$321', discount: '%15', sale_price: '$123', image:'shop-1', rating: 4},
        {active: false, title:'Superturf Adventure X Atmos', price: '$321.00', discount: '%25', sale_price: '$123.00', image:'shop-2', rating: 3},
        {active: false, title:'Product Name', price: '$321.00', discount: '%15', sale_price: '$123.00', image:'shop-3'},
        {active: false, title:'2750 Cotu Classic Sneaker', price: '$321.00', discount: '%15', sale_price: '$123.00', image:'shop-4', rating: 5},
        {active: false, title:'Product Name', price: '$321.00', discount: '%15', sale_price: '$123.00', image:'shop-5'},
        {active: false, title:'2750 Cotu Classic Sneaker', price: '$321.00', discount: '%15', sale_price: '$123.00', image:'shop-6', rating: 4},
        {active: false, title:'Product Name', price: '$321.00', discount: '%15', sale_price: '$123.00', image:'shop-1', rating: 5},
        {active: false, title:'Superturf Adventure X Atmos', price: '$321.00', discount: '%15', sale_price: '$123.00', image:'shop-2', rating: 5},
      ];
      
      this.colors = [
        {code: 'bg-black-alpha-90'},
        {code: 'bg-blue-500'},
        {code: 'bg-yellow-500'},
        {code: 'bg-gray-500'},
      ];

      this.sortOptions = [
        {label: 'Price High to Low', value: '!price'},
        {label: 'Price Low to High', value: 'price'}
      ];
    }

    onSortChange(event) {
      let value = event.value;

      if (value.indexOf('!') === 0) {
          this.sortOrder = -1;
          this.sortField = value.substring(1, value.length);
      }
      else {
          this.sortOrder = 1;
          this.sortField = value;
      }
  }

}
