import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppsMailComponent } from './apps.mail.component';
import { MailInboxComponent } from './mail-inbox/mail-inbox.component';
import { MailComposeComponent } from './mail-compose/mail-compose.component';
import { MailDetailComponent } from './mail-detail/mail-detail.component';
import { MailStarredComponent } from './mail-starred/mail-starred.component';
import { MailImportantComponent } from './mail-important/mail-important.component';
import { MailSpamComponent } from './mail-spam/mail-spam.component';
import { MailTrashComponent } from './mail-trash/mail-trash.component';
import { MailSentComponent } from './mail-sent/mail-sent.component';
import { MailArchiveComponent } from './mail-archive/mail-archive.component';

@NgModule({
    imports: [RouterModule.forChild([
        {
            path: '', component: AppsMailComponent, children: [
                { path: '', redirectTo: 'inbox', pathMatch: 'full' },
                { path: 'inbox', data: { breadcrumb: 'Inbox' }, component: MailInboxComponent },
                { path: 'detail/:id', data: { breadcrumb: 'Detail' }, component: MailDetailComponent },
                { path: 'sent', data: { breadcrumb: 'Sent' }, component: MailSentComponent },
                { path: 'archived', data: { breadcrumb: 'Archived' }, component: MailArchiveComponent },
                { path: 'compose', data: { breadcrumb: 'Compose' }, component: MailComposeComponent },
                { path: 'starred', data: { breadcrumb: 'Starred' }, component: MailStarredComponent },
                { path: 'important', data: { breadcrumb: 'Important' }, component: MailImportantComponent },
                { path: 'spam', data: { breadcrumb: 'Spam' }, component: MailSpamComponent },
                { path: 'trash', data: { breadcrumb: 'Trash' }, component: MailTrashComponent }
            ]
        }
    ])],
    exports: [RouterModule]
})
export class AppsMailRoutingModule { }
