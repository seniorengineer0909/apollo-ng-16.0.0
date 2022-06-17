import {Component} from '@angular/core';
import {BreadcrumbService} from 'src/app/layout/service/app.breadcrumb.service';

@Component({
    templateUrl: './documentation.component.html'
})
export class DocumentationComponent {

    constructor(private breadcrumbService: BreadcrumbService) {
        this.breadcrumbService.setItems([
            {label: 'Documentation'}
        ]);
    }
}
