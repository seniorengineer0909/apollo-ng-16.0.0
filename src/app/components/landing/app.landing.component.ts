import {Component} from '@angular/core';

@Component({
    templateUrl: './app.landing.component.html'
})
export class AppLandingComponent {

  inputType: string = 'password';

  email: string;

  password: string;

  val: any;

  selectedValues: any[];

  togglePassword() {
    if (this.inputType === 'text') {
      this.inputType = 'password';
    } else {
      this.inputType = 'text';
    }
  }

}
