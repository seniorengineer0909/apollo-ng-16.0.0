import { Component } from '@angular/core';
import { BreadcrumbService } from 'src/app/service/app.breadcrumb.service';

interface Create {
    name: string;
}

@Component({
    templateUrl: './app.create.component.html'
})
export class AppCreateComponent {

    pushNotifacitons: boolean =false;
    
    emailNotifications: boolean =false;

    smsNotifications: boolean =false;

    constructor(private breadcrumbService: BreadcrumbService) {
        this.breadcrumbService.setItems([
            { label: 'Create' }
        ]);
    }


}
