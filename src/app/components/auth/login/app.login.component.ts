import {Component} from '@angular/core';


@Component({
    selector: 'app-login',
    templateUrl: './app.login.component.html'
})
export class AppLoginComponent {

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
