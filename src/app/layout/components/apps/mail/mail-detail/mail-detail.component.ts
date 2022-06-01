import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Mail } from 'src/app/api/mail';
import { BreadcrumbService } from 'src/app/service/app.breadcrumb.service';
import { MailService } from 'src/app/service/mailservice';

@Component({
    selector: 'mail-detail',
    templateUrl: './mail-detail.component.html',
    styleUrls: ['../../../../../assets/demo/editor.scss']
})
export class MailDetailComponent implements OnInit, OnDestroy {

    subscription: Subscription;

    mail: Mail;

    constructor(private route: ActivatedRoute, private mailService: MailService, private breadcrumbService: BreadcrumbService) { }

    ngOnInit(): void {
        this.subscription = this.route.params.pipe(
          switchMap(params => {
            return this.mailService.getMail(params.id)
          })
        ).subscribe(d => this.mail = d);
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

}
