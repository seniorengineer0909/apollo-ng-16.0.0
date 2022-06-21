import { Component } from '@angular/core';
import { LayoutService } from 'src/app/layout/service/app.layout.service';

@Component({
    templateUrl: './colors.component.html',
    styles: [`
        .color-stack {
            display: flex;
            flex-direction: column;
        }

        .color-box {
            width: 2.5rem;
            display: flex;
            align-items: center;
            padding: 1rem;
            width: 250px;
            font-weight: bold;
        }

        .sample-layout {
            width: 375px;
        }
        
    `]
})
export class ColorsComponent {

    colors: any[] = ['blue', 'green', 'yellow', 'cyan', 'pink', 'indigo', 'red', 'teal', 'orange', 'bluegray', 'purple', 'gray', 'primary'];

    shades: any[] = [0, 50, 100, 200, 300, 400, 500, 600, 700, 800, 900];

    constructor(private layoutService: LayoutService) { }

    get colorScheme () {
        return this.layoutService.config.colorScheme === 'light' ? false : true;
    }
}
