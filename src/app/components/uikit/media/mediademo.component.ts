import {Component, OnInit} from '@angular/core';
import { ProductService } from 'src/app/service/product.service';
import { PhotoService } from 'src/app/service/photo.service';
import { Product } from 'src/app/api/product';
import {BreadcrumbService} from 'src/app/layout/service/app.breadcrumb.service';

@Component({
    templateUrl: './mediademo.component.html'
})
export class MediaDemoComponent implements OnInit{

    products: Product[];

    images: any[];

    galleriaResponsiveOptions: any[] = [
        {
            breakpoint: '1024px',
            numVisible: 5
        },
        {
            breakpoint: '960px',
            numVisible: 4
        },
        {
            breakpoint: '768px',
            numVisible: 3
        },
        {
            breakpoint: '560px',
            numVisible: 1
        }
    ];

    carouselResponsiveOptions: any[] = [
        {
            breakpoint: '1024px',
            numVisible: 3,
            numScroll: 3
        },
        {
            breakpoint: '768px',
            numVisible: 2,
            numScroll: 2
        },
        {
            breakpoint: '560px',
            numVisible: 1,
            numScroll: 1
        }
    ];

    constructor(private productService: ProductService, private photoService: PhotoService, private breadcrumbService: BreadcrumbService) {
        this.breadcrumbService.setItems([
            {label: 'Media'}
        ]);
    }

    ngOnInit() {
        this.productService.getProductsSmall().then(products => {
            this.products = products;
        });

        this.photoService.getImages().then(images => {
            this.images = images;
        });
    }
}
