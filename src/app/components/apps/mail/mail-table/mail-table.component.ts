import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem, MessageService } from 'primeng/api';
import { Mail } from 'src/app/api/mail';
import { MailService } from 'src/app/components/apps/mail/service/mail.service';

@Component({
    selector: 'mail-table',
    templateUrl: './mail-table.component.html',
    styleUrls: ['./mail-table.component.scss'],
})
export class MailTableComponent implements OnInit {

    @Input() mails: Mail[];

    menuItems: MenuItem[];

    selectedMails: Mail[];

    mail: Mail;

    dialogVisible: boolean = false;

    constructor(private router: Router, private mailService: MailService, private messageService: MessageService) { }

    ngOnInit(): void {

        this.menuItems = [
            { label: 'Archive', icon: 'pi pi-fw pi-file', command: () => this.onArchiveMultiple() },
            { label: 'Spam', icon: 'pi pi-fw pi-ban', command: () => this.onSpamMultiple() },
            { label: 'Delete', icon: 'pi pi-fw pi-trash', command: () => this.onDeleteMultiple() },
        ];
    }

    toggleOptions(event, opt, date) {
        if (event.type === 'mouseenter') {
            opt.style.display = 'flex';
            date.style.display = 'none';
        } else {
            opt.style.display = 'none';
            date.style.display = 'flex';
        }
    }

    onRowSelect(id) {
        this.router.navigate(['/apps/mail/detail/', id]);
    }

    onStar(id) {
        this.mailService.onStar(id);
    }

    onArchive(event, id) {
        event.stopPropagation();
        this.mailService.onArchive(id);
        this.messageService.add({ severity: 'info', summary: 'Info', detail: 'Mail archived', life: 3000 });
    }

    onBookmark(id) {
        this.mailService.onBookmark(id);
    }

    onDelete(id) {
        this.mailService.onDelete(id);
        this.messageService.add({ severity: 'info', summary: 'Info', detail: 'Mail deleted', life: 3000 });
    }

    onDeleteMultiple() {
        if (this.selectedMails && this.selectedMails.length > 0) {
            this.mailService.onDeleteMultiple(this.selectedMails);
            this.messageService.add({ severity: 'info', summary: 'Info', detail: 'Mails deleted', life: 3000 });
        }
    }

    onSpamMultiple() {
        if (this.selectedMails &&  this.selectedMails.length > 0) {
            this.mailService.onSpamMultiple(this.selectedMails);
            this.messageService.add({ severity: 'info', summary: 'Info', detail: 'Moved to spam', life: 3000 });
        }
    }

    onArchiveMultiple() {
        if (this.selectedMails &&  this.selectedMails.length > 0) {
            this.mailService.onArchiveMultiple(this.selectedMails);
            this.messageService.add({ severity: 'info', summary: 'Info', detail: 'Moved to archive', life: 3000 });
        }
    }

    onTrash(event, mail) {
        event.stopPropagation();
        if (mail.trash) {
            this.onDelete(mail.id)
        }
        this.mailService.onTrash(mail.id);
    }

    onReply(event, mail) {
        event.stopPropagation();
        this.mail = mail;
        this.dialogVisible = true;
    }

}
