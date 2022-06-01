import { Component } from '@angular/core';

@Component({
    selector: 'app-app-lock-screen',
    templateUrl: './app.lockscreen.component.html',
    styleUrls: ['./app.lockscreen.component.scss']
})
export class AppLockScreenComponent {
    inputType: string = 'password';

    name: string = 'Amy Elsner';

    password: string;

    togglePassword(){
      if (this.inputType === 'text') {
        this.inputType = 'password';
      } else {
        this.inputType = 'text';
      }
    }
}