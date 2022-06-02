import {Component} from '@angular/core';
import { BreadcrumbService } from 'src/app/service/app.breadcrumb.service';

@Component({
    templateUrl: './dashboard.component.html'
})
export class DashboardDemoComponent {

    constructor(private breadcrumbService: BreadcrumbService) {
        this.breadcrumbService.setItems([
            {label: 'E-Commerce Dashboard'}
        ]);
    }

}
