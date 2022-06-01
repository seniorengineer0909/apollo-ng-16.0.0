import {Component, OnInit} from '@angular/core';
import { ConfigService } from 'src/app/service/app.config.service';

@Component({
    selector: 'app-login',
    templateUrl: './app.login.component.html'
})
export class AppLoginComponent implements OnInit {

    dark: boolean = false;

    constructor(public configService: ConfigService) { }

    ngOnInit() {
        this.dark = this.configService.getConfig().dark;
    }
}
