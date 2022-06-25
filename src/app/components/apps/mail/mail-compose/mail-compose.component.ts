import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
    templateUrl: './mail-compose.component.html'
})
export class MailComposeComponent {

    constructor(private messageService: MessageService) {}

    sendMail() {
        this.messageService.add({severity:'success', summary: 'Success', detail: 'Mail sent'});
    }
    
}
