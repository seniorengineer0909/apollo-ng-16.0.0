import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-select',
    templateUrl: './select.component.html',
})
export class SelectComponent implements OnInit {

    tabContent: any[];

    ngOnInit(): void {
      this.tabContent = [
        {icon: 'pi pi-fw pi-tag', title: 'Sales Meeting', info: '9:00 - 10:00 PM'},
        {icon: 'pi pi-fw pi-palette', title: 'Dashboard UI & UX for Prime', info: '10:00 - 11:00 PM'},
        {icon: 'pi pi-fw pi-tag', title: 'Profile UI & UX for Prime', info: '10:00 - 11:00 PM'},
        {icon: 'pi pi-fw pi-palette', title: 'Sales Meeting', info: '9:00 - 10:00 PM'},
        {icon: 'pi pi-fw pi-briefcase', title: 'Dashboard UI & UX for Prime', info: '10:00 - 11:00 PM'},
        {icon: 'pi pi-fw pi-tag', title: 'Profile UI & UX for Prime', info: '10:00 - 11:00 PM'},
      ]
    }
}
