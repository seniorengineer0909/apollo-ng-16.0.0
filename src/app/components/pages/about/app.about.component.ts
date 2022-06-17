import {Component, ViewEncapsulation} from '@angular/core';

@Component({
    templateUrl: './app.about.component.html',
    styleUrls: ['./app.about.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class AppAboutComponent {

    visibleMember: number = null;
    
}
