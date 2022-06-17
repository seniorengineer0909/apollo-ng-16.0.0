import { Component } from '@angular/core';

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

}
