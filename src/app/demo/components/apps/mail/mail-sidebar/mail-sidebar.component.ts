import { Component, OnDestroy } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { NavigationEnd, Router } from '@angular/router';
import { Mail } from 'src/app/demo/api/mail';
import { MailService } from 'src/app/demo/components/apps/mail/service/mail.service';
import { filter, Subscription } from 'rxjs';

@Component({
    selector: 'app-mail-sidebar',
    templateUrl: './mail-sidebar.component.html'
})
export class MailSidebarComponent implements OnDestroy {

    items: MenuItem[] = [];

    badgeValues: any;

    mailSubscription: Subscription;

    routeSubscription: Subscription;

    url: string = '';

    constructor(private router: Router, private mailService: MailService) {
        this.mailSubscription = this.mailService.mails$.subscribe(data => this.getBadgeValues(data));

        this.routeSubscription = this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe((params: any) => {
            this.url = params.url;
        });
    }

    navigate(item: MenuItem) {
        if (item.routerLink) {
            this.router.navigate([item.routerLink]);
        }
    }

    getBadgeValues(data: Mail[]) {
        let inbox = [],
            starred = [],
            spam = [],
            important = [],
            archived = [],
            trash = [],
            sent = []

        for (let i = 0; i < data.length; i++) {
            let mail = data[i];

            if (!mail.archived && !mail.trash && !mail.spam && !mail.hasOwnProperty('sent')) {
                inbox.push(mail);
            }
            if (mail.starred) {
                starred.push(mail);
            }
            if (mail.spam) {
                spam.push(mail);
            }
            if (mail.important) {
                important.push(mail);
            }
            if (mail.archived) {
                archived.push(mail);
            }
            if (mail.trash) {
                trash.push(mail);
            }
            if (mail.sent) {
                sent.push(mail);
            }
        }

        this.badgeValues = {
            inbox: inbox.length,
            starred: starred.length,
            spam: spam.length,
            important: important.length,
            archived: archived.length,
            trash: trash.length,
            sent: sent.length
        };

        this.updateSidebar();
    }

    updateSidebar() {
        this.items = [
            { label: 'Inbox', icon: 'pi pi-inbox', badge: this.badgeValues.inbox, routerLink: '/apps/mail/inbox' },
            { label: 'Starred', icon: 'pi pi-star', badge: this.badgeValues.starred, routerLink: '/apps/mail/starred' },
            { label: 'Spam', icon: 'pi pi-ban', badge: this.badgeValues.spam, routerLink: '/apps/mail/spam' },
            { label: 'Important', icon: 'pi pi-bookmark', badge: this.badgeValues.important, routerLink: '/apps/mail/important' },
            { label: 'Sent', icon: 'pi pi-send', badge: this.badgeValues.sent, routerLink: '/apps/mail/sent' },
            { label: 'Archived', icon: 'pi pi-book', badge: this.badgeValues.archived, routerLink: '/apps/mail/archived' },
            { label: 'Trash', icon: 'pi pi-trash', badge: this.badgeValues.trash, routerLink: '/apps/mail/trash' }
        ];
    }

    ngOnDestroy() {
        this.mailSubscription.unsubscribe();
        this.routeSubscription.unsubscribe();
    }
}
