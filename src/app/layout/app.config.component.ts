import { Component } from '@angular/core';
import { AppLayoutComponent } from './app.layout.component';

@Component({
    selector: 'app-config',
    templateUrl: './app.config.component.html'
})
export class AppConfigComponent {

    constructor(public appLayout: AppLayoutComponent) {
    }

    onConfigButtonClick() {
        this.appLayout.configVisible = true;
    }
}
