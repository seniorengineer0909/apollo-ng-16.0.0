import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem, MessageService } from 'primeng/api';
import { Mail } from 'src/app/api/mail';
import { MailService } from 'src/app/service/mail.service';

@Component({
    selector: 'mail-inbox',
    templateUrl: './mail-inbox.component.html'
})
export class MailInboxComponent implements OnInit {

    mails: Mail[];

    mail: Mail;

    selectedMails: Mail[];

    cols: any[];

    menuItems: MenuItem[];

    dialogVisible: boolean = false;

    constructor(private mailService: MailService, private router: Router, private messageService: MessageService) {}

    ngOnInit(): void {
        this.mailService.getMails().then(data => this.mails = data);

        this.cols = [
            {field: 'from', header: 'From'},
            {field: 'title', header: 'Title'},
            {field: 'date', header: 'Date'}
        ];

        this.menuItems = [
            {label: 'Delete', icon: 'pi pi-fw pi-trash'},
            {label: 'Archive', icon: 'pi pi-fw pi-file'}
        ];
    }

    toggleOptions(event, opt, date) {
        if (event.type === 'mouseenter') {
            opt.style.display = 'flex';
            date.style.display = 'none';
        } 
        else {
            opt.style.display = 'none';
            date.style.display = 'flex';
        }
    }

    onRowSelect(id) {
        this.router.navigate(['/apps/mail/detail/', id])
    }

    archive(id) {
        this.mails = this.mails.filter(m => m.id !== id);
        this.messageService.add({severity:'info', summary: 'Info', detail: 'Mail archived', life: 3000});
    }

    delete(id) {
        this.mails = this.mails.filter(m => m.id !== id);
        this.messageService.add({severity:'info', summary: 'Info', detail: 'Mail deleted', life: 3000});
    }

    reply(mail) {
        this.mail = mail;
        this.dialogVisible = true;
    }
}
