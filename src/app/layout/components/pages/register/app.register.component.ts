import { Component } from '@angular/core';

@Component({
    selector: 'app-app.register',
    templateUrl: './app.register.component.html'
})
export class AppRegisterComponent {

    inputType: string = 'password';

    email: string;

    password: string;

    val: any;

    selectedValues: any[];

    togglePassword(){
      if (this.inputType === 'text') {
        this.inputType = 'password';
      } else {
        this.inputType = 'text';
      }
    }

}
