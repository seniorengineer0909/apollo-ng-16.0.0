import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Mail } from 'src/app/api/mail';
import { MailService } from '../service/mail.service';

@Component({
    templateUrl: './mail-detail.component.html'
})
export class MailDetailComponent implements OnDestroy {

    subscription: Subscription;

    mail: Mail;

    id: any;

    constructor(private route: ActivatedRoute, private mailService: MailService, private location: Location) {
        this.subscription = this.route.params.pipe(
            switchMap(params => {
                this.id = params['id'];
                return this.mailService.mails$
            })
        ).subscribe(data => {
            this.mail = data.filter(d => d.id == this.id)[0];

        });
    }

    goBack() {
        this.location.back();
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

}
