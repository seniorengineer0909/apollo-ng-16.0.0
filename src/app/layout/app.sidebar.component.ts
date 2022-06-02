import { Component } from '@angular/core';
import { AppLayoutComponent } from './app.layout.component';

@Component({
    selector: 'app-sidebar',
    templateUrl: './app.sidebar.component.html'
})
export class AppSidebarComponent {

    constructor(public appLayout: AppLayoutComponent) {
    }

}
