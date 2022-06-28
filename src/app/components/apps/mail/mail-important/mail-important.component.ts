import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Mail } from 'src/app/components/api/mail';
import { MailService } from 'src/app/components/apps/mail/service/mail.service';

@Component({
    templateUrl: './mail-important.component.html'
})
export class MailImportantComponent implements OnDestroy {

    importantMails: Mail[];

    subscription: Subscription;

    constructor(private mailService: MailService) {
        this.subscription = this.mailService.mails$.subscribe(data => {
            this.importantMails = data.filter(d => d.important && !d.spam && !d.trash && !d.archived);
        });
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
