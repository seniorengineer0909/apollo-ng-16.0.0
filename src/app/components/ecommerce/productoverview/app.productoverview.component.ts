import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-productoverview',
    templateUrl: './app.productoverview.component.html',
})
export class AppProductOverviewComponent implements OnInit {
    
    color: string = 'bluegray';

    size: string = 'M';

    liked: boolean;

    images: string[];

    selectedImageIndex: number = 0;

    quantity: number = 1;
          
    ngOnInit(): void {
      this.images = [
          'product-overview-3-1.png',
          'product-overview-3-2.png',
          'product-overview-3-3.png',
          'product-overview-3-4.png'
      ];
    }
}
