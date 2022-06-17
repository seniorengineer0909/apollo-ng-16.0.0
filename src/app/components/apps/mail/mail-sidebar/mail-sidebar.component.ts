import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';
@Component({
    selector: 'mail-sidebar',
    templateUrl: './mail-sidebar.component.html'
})
export class MailSidebarComponent implements OnInit {
    
    activeIndex: number = 0;

    items: MenuItem[];

    constructor(private router: Router) { }

    ngOnInit(): void {
        this.items = [
            {label: 'Inbox', icon: 'pi pi-inbox', badge: '1100', routerLink:'/apps/mail/inbox'},
            {label: 'Starred', icon: 'pi pi-star'},
            {label: 'Spam', icon: 'pi pi-ban'},
            {label: 'Important', icon: 'pi pi-bookmark'},
            {label: 'Sent', icon: 'pi pi-send'},
            {label: 'Drafts', icon: 'pi pi-file'},
            {label: 'Trash', icon: 'pi pi-trash'}
        ];
    }

    navigate(item, index) {
        this.activeIndex = index;
        if (item.routerLink) {
            this.router.navigate([item.routerLink]);
        }
    }
}
