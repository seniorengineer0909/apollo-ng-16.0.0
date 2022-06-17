import { Component } from '@angular/core';

@Component({
    selector: 'app-app.newpassword',
    templateUrl: './app.newpassword.component.html',
})
export class AppNewPasswordComponent {
    inputType: string = 'password';

    password: string;
    
    password2: string;

    togglePassword() {
      if (this.inputType === 'text') {
        this.inputType = 'password';
      } else {
        this.inputType = 'text';
      }
    }
}
