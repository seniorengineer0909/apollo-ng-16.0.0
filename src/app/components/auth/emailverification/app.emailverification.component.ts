import { Component } from '@angular/core';
import { LayoutService } from 'src/app/layout/service/app.layout.service';

@Component({
    templateUrl: './app.emailverification.component.html'
})
export class AppEmailVerificationComponent {

    val1: number;
    
    val2: number;
    
    val3: number;
    
    val4: number;

	constructor(private layoutService: LayoutService) {}

	get dark(): boolean {
		return this.layoutService.config.colorScheme !== 'light';
	}
    
}
