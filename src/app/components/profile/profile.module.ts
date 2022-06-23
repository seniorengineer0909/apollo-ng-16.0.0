import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RippleModule } from 'primeng/ripple';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputSwitchModule } from 'primeng/inputswitch';
import { TableModule } from 'primeng/table';
import { CheckboxModule } from 'primeng/checkbox';
import { ProgressBarModule } from 'primeng/progressbar';
import { DropdownModule } from 'primeng/dropdown';
import { AvatarModule } from 'primeng/avatar';
import { FileUploadModule } from 'primeng/fileupload';
import { ProfileListComponent } from './profilelist.component';
import { ProfileCreateComponent } from './profilecreate.component';
import { ProfileRoutingModule } from './profile-routing.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ProfileRoutingModule,
        RippleModule,
        ButtonModule,
        InputTextModule,
        InputTextareaModule,
        InputSwitchModule,
        TableModule,
        CheckboxModule,
        FileUploadModule,
        DropdownModule,
        ProgressBarModule,
        AvatarModule
    ],
    declarations: [ProfileListComponent, ProfileCreateComponent]
})
export class ProfileModule { }
