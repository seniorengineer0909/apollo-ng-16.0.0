import {Component} from '@angular/core';
import {BreadcrumbService} from 'src/app/service/app.breadcrumb.service';

@Component({
    templateUrl: './app.emptydemo.component.html'
})
export class AppEmptyDemoComponent {
    
    constructor(private breadcrumbService: BreadcrumbService) {
        this.breadcrumbService.setItems([
            {label: 'Empty Page'}
        ]);
    }
}
