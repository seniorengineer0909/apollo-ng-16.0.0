import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FullCalendarModule } from '@fullcalendar/angular';
import { CalendarModule } from 'primeng/calendar';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { DropdownModule } from 'primeng/dropdown';
import { ToastModule } from 'primeng/toast'
import { ColorPickerModule } from 'primeng/colorpicker'
import { AppsFileManagamentRoutingModule } from './apps.filemanagament-routing.module';
import { AppsFilemanagamentComponent } from './apps.filemanagament.component';
import { AvatarModule } from 'primeng/avatar';
import { TableModule } from 'primeng/table';
import { FileUploadModule } from 'primeng/fileupload';
import { ChartModule } from 'primeng/chart';
import { MenuModule } from 'primeng/menu';
import { FolderComponent } from './folder/folder.component';
import { CardComponent } from './card/card.component';
import { UploadFilesComponent } from './upload-files/upload-files.component';
import { ChartComponent } from './chart/chart.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FullCalendarModule,
    DialogModule,
    InputTextareaModule,
    ButtonModule,
    CalendarModule,
    InputTextModule,
    DropdownModule,
    ToastModule,
    ColorPickerModule,
    RippleModule,
    AppsFileManagamentRoutingModule,
    AvatarModule,
    TableModule,
    FileUploadModule,
    ChartModule,
    MenuModule
  ],
  declarations: [AppsFilemanagamentComponent, FolderComponent, CardComponent, UploadFilesComponent, ChartComponent]
})
export class AppsFileManagamentModule { }
