import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppsMailRoutingModule } from './apps.mail-routing.module';
import { AppsMailComponent } from './apps.mail.component';
import { MailInboxComponent } from './mail-inbox/mail-inbox.component';
import { MailComposeComponent } from './mail-compose/mail-compose.component';
import { MailDetailComponent } from './mail-detail/mail-detail.component';
import { MailReplyComponent } from './mail-reply/mail-reply.component';
import { MailSidebarComponent } from './mail-sidebar/mail-sidebar.component';
import { MenuModule } from 'primeng/menu';
import { ButtonModule } from 'primeng/button'
import { RippleModule } from 'primeng/ripple';
import { MailService } from 'src/app/service/mailservice';
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
    DialogModule
  ],
  declarations: [AppsMailComponent, MailInboxComponent, MailComposeComponent, MailDetailComponent, MailSidebarComponent, MailReplyComponent],
  providers: [MailService, MessageService]
})
export class AppsMailModule { }
