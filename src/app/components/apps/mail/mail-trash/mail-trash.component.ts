import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Mail } from 'src/app/api/mail';
import { MailService } from 'src/app/components/apps/mail/service/mail.service';

@Component({
    templateUrl: './mail-trash.component.html'
})
export class MailTrashComponent implements OnDestroy {

    trashMails: Mail[];

    subscription: Subscription;

    constructor(private mailService: MailService) {
        this.subscription = this.mailService.mails$.subscribe(data => {
            this.trashMails = data.filter(d => d.trash);
        });
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

}
