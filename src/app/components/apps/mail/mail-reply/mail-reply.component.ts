import { Component, Input, EventEmitter, Output } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Mail } from 'src/app/api/mail';

@Component({
    selector: 'mail-reply',
    templateUrl: './mail-reply.component.html',
})
export class MailReplyComponent{

    @Input() content: Mail;

    @Output() hide: EventEmitter<any> = new EventEmitter();

    constructor(private messageService: MessageService) {}

    sendMail() {
        this.messageService.add({severity:'success', summary: 'Success', detail: 'Mail sent'});
        this.hide.emit();
    }
}
