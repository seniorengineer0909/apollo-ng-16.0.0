import { Component } from '@angular/core';
import { BreadcrumbService } from 'src/app/service/app.breadcrumb.service';

@Component({
    selector: 'app-app.settings',
    templateUrl: './app.settings.component.html'

})
export class AppSettingsComponent {

    pushNotifacitons: boolean = false;

    onlyDownload: boolean = true;

    smsNotifications: boolean = false;

    darkMode: boolean = false;

    subscribeToNewsletter: boolean = true;

    monthlyProductUpdates: boolean = true;

    messages: boolean = false;

    emailNotifacitons: boolean = false;

    lightMode: boolean = false;

    phoneNumber: boolean = true;

    sound: boolean = false;

    constructor(private breadcrumbService: BreadcrumbService) {
        this.breadcrumbService.setItems([
            { label: 'Settings' }
        ]);
    }
}
