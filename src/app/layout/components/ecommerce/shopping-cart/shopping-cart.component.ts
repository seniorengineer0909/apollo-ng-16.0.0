import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd, Event } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-shopping-cart',
    templateUrl: './shopping-cart.component.html',
    styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit, OnDestroy {

    display: boolean = false;

    products: any[];

    totalAmount: any = 0;
    
    product: any;

    subscription: Subscription;

    buttonVisible: boolean = false;

    constructor(private router: Router) {
      this.subscription = this.router.events.subscribe((event:Event) => {
        if (event instanceof NavigationEnd ) {
          const url = event.url.toString();

          if (url.indexOf('productoverview') !== -1 || url.indexOf('shop') !== -1) {
            this.buttonVisible = true;
          } else { 
            this.buttonVisible = false;
          }
        }
      });
     }

    ngOnInit(): void {

      this.products = [
        {title:'Product Name', price: 18.00, image:'shop-1', size: 'Black | 46', quantity: 1},
        {title:'Superturf Adventure X Atmos', price: 22.00, image:'shop-2', size: 'White | 43', quantity: 1},
        {title:'Product Name', price: 20.00, image:'shop-5', size: 'White | 42', quantity: 1},
        {title:'Product Name', price: 20.00, image:'shop-4', size: 'Navy | 41', quantity: 1},
        {title:'Product Name', price: 20.00, image:'shop-3', size: 'Black | 43', quantity: 1},
      ];

      this.product = {title:'Product Name', price: 20.00, image:'shop-3', size: 'Black | 44', quantity: 1};

      this.calculateTotal();
    }

    onRemove(item){
      this.products = this.products.filter(i => i !== item);
      
      this.calculateTotal();
    }

    calculateTotal(){
      this.totalAmount = (this.products.map(i => i.price * i.quantity).reduce((prev, next) => prev + next) + (this.product.price * this.product.quantity)).toFixed(2)
      
    }

    onInput(){
      this.calculateTotal();
    }

    ngOnDestroy(){
      this.subscription.unsubscribe();
    }

}
