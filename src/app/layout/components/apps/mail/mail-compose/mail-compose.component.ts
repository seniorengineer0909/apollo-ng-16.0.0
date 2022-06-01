import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from 'src/app/service/app.breadcrumb.service';
import { MessageService } from 'primeng/api';

@Component({
    selector: 'mail-compose',
    templateUrl: './mail-compose.component.html',
    styleUrls: ['./mail-compose.component.scss', '../../../../../assets/demo/editor.scss']
})
export class MailComposeComponent implements OnInit {

    constructor(private breadcrumbService: BreadcrumbService, private messageService: MessageService) { 
        this.breadcrumbService.setItems([
          {label: 'Mail Compose'},
        ]);
    }

    ngOnInit(): void {
    }

    sendMail() {
        this.messageService.add({severity:'success', summary: 'Success', detail: 'Mail sent'});
    }
}
