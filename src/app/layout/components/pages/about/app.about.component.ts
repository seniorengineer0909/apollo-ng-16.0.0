import {Component, ViewEncapsulation} from '@angular/core';
import {BreadcrumbService} from 'src/app/service/app.breadcrumb.service';

@Component({
    templateUrl: './app.about.component.html',
    styleUrls: ['./app.about.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class AppAboutComponent {

    visibleMember: number = null;
    
    constructor(private breadcrumbService: BreadcrumbService) {
        this.breadcrumbService.setItems([
            {label: 'About Us'}
        ]);
    }
}
