import { Component } from '@angular/core';
import { AppLayoutComponent } from './app.layout.component';

@Component({
    selector: 'app-profilemenu',
    templateUrl: './app.profilesidebar.component.html'
})
export class AppProfileSidebarComponent {

    constructor(public appLayout: AppLayoutComponent) {
    }
}