import {Component} from '@angular/core';
import {BreadcrumbService} from 'src/app/service/app.breadcrumb.service';

@Component({
    templateUrl: './app.pricing.component.html',
    styleUrls: ['./app.pricing.scss']
})
export class AppPricingComponent {
    
    constructor(private breadcrumbService: BreadcrumbService) {
        this.breadcrumbService.setItems([
            {label: 'Pricing'}
        ]);
    }
}
