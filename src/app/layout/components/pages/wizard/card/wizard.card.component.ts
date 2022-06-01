import { Component, Input } from '@angular/core';

@Component({
    selector: 'wizard-card',
    templateUrl: './wizard.card.component.html',
})
export class WizardCardComponent{

    @Input('tabContent') tabContent:any[];

    selection: number;
}
