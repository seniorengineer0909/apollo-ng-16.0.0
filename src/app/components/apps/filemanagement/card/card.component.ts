import { Component, Input } from '@angular/core';

@Component({
    selector: 'file-card',
    templateUrl: './card.component.html',
})
export class CardComponent {
    @Input() card: any;
}
