import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Mail } from 'src/app/api/mail';
import { MailService } from 'src/app/service/mail.service';

@Component({
    templateUrl: './mail-detail.component.html'
})
export class MailDetailComponent implements OnInit, OnDestroy {

    subscription: Subscription;

    mail: Mail;

    constructor(private route: ActivatedRoute, private mailService: MailService) { }

    ngOnInit(): void {
        this.subscription = this.route.params.pipe(
            switchMap(params => {
                return this.mailService.getMail(params['id'])
            })
        ).subscribe(d => this.mail = d);
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

}
