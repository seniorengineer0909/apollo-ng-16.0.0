import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppsMailRoutingModule } from './apps.mail-routing.module';
import { AppsMailComponent } from './apps.mail.component';
import { MailInboxComponent } from './mail-inbox/mail-inbox.component';
import { MailArchiveComponent } from './mail-archive/mail-archive.component';
import { MailImportantComponent } from './mail-important/mail-important.component';
import { MailStarredComponent } from './mail-starred/mail-starred.component';
import { MailTrashComponent } from './mail-trash/mail-trash.component';
import { MailComposeComponent } from './mail-compose/mail-compose.component';
import { MailDetailComponent } from './mail-detail/mail-detail.component';
import { MailReplyComponent } from './mail-reply/mail-reply.component';
import { MailSidebarComponent } from './mail-sidebar/mail-sidebar.component';
import { MenuModule } from 'primeng/menu';
import { ButtonModule } from 'primeng/button'
import { RippleModule } from 'primeng/ripple';
import { TableModule } from 'primeng/table';
import { ToolbarModule } from 'primeng/toolbar';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { RatingModule } from 'primeng/rating';
import { AvatarModule } from 'primeng/avatar';
import { EditorModule } from 'primeng/editor';
import { FileUploadModule } from 'primeng/fileupload';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { DialogModule } from 'primeng/dialog';
import { TooltipModule } from 'primeng/tooltip';
import { MailSpamComponent } from './mail-spam/mail-spam.component';
import { MailSentComponent } from './mail-sent/mail-sent.component';
import { MailTableComponent } from './mail-table/mail-table.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        AppsMailRoutingModule,
        MenuModule,
        ButtonModule,
        RippleModule,
        TableModule,
        ToolbarModule,
        InputTextModule,
        CheckboxModule,
        RatingModule,
        AvatarModule,
        EditorModule,
        ToastModule,
        FileUploadModule,
        DialogModule,
        TooltipModule
    ],
    declarations: [AppsMailComponent, MailInboxComponent, MailComposeComponent, MailDetailComponent, MailSidebarComponent, MailReplyComponent, MailArchiveComponent, MailImportantComponent, MailStarredComponent, MailTrashComponent, MailSpamComponent, MailSentComponent, MailTableComponent],
    providers: [MessageService]
})
export class AppsMailModule { }
