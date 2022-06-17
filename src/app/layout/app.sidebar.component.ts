import { Component, ElementRef } from '@angular/core';
import { LayoutService } from './service/app.layout.service';

@Component({
    selector: 'app-sidebar',
    templateUrl: './app.sidebar.component.html'
})
export class AppSidebarComponent {

    constructor(public layoutService: LayoutService, public el: ElementRef) {}

    get logo(): string {
        return (this.layoutService.isSlim() || this.layoutService.isHorizontal()) ? 'assets/layout/images/logo-colored-sm.svg' : 'assets/layout/images/logo-colored.svg' 
    }

}
