import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
    selector: 'mail-compose',
    templateUrl: './mail-compose.component.html',
    styleUrls: ['./mail-compose.component.scss']
})
export class MailComposeComponent {

    constructor(private messageService: MessageService) {}

    sendMail() {
        this.messageService.add({severity:'success', summary: 'Success', detail: 'Mail sent'});
    }
}
