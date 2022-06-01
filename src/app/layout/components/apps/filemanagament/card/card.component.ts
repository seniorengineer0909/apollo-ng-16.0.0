import { Component, Input, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
})
export class CardComponent {
    @Input() card:any;
}
