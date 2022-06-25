import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MailAppComponent } from './mail.app.component';
import { MailInboxComponent } from './mail-inbox/mail-inbox.component';
import { MailComposeComponent } from './mail-compose/mail-compose.component';
import { MailDetailComponent } from './mail-detail/mail-detail.component';

@NgModule({
    imports: [RouterModule.forChild([
        {
            path: '', component: MailAppComponent, children: [
                { path: '', redirectTo: 'inbox', pathMatch: 'full' },
                { path: 'inbox', data: { breadcrumb: 'Inbox' }, component: MailInboxComponent },
                { path: 'detail/:id', data: { breadcrumb: 'Detail' }, component: MailDetailComponent },
                { path: 'compose', data: { breadcrumb: 'Compose' }, component: MailComposeComponent }
            ]
        }
    ])],
    exports: [RouterModule]
})
export class MailAppRoutingModule { }
