import { Component } from '@angular/core';

@Component({
    templateUrl: './contact.component.html'
})
export class ContactComponent {
    
    options: any;

    overlays: any[];

    dialogVisible: boolean;

    markerTitle: string;

    selectedPosition: any;

    infoWindow: any;

    draggable: boolean;

    name: string;

    email: string;

    message: string;

    content: any[] = [
        {icon: 'pi pi-fw pi-phone', title: 'Phone', info:'1 (833) 597-7538'},
        {icon: 'pi pi-fw pi-map-marker', title: 'Our Head Office', info:'Churchill-laan 16 II, 1052 CD, Amsterdam'},
        {icon: 'pi pi-fw pi-print', title: 'Fax', info:'3 (833) 297-1548'}
    ];
}