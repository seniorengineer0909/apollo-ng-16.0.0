import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppsTaskListRoutingModule } from './apps.tasklist-routing.module';
import { AppsTaskListComponent } from './apps.tasklist.component';
import { CreateTaskComponent } from './create-task/create-task.component';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { EditorModule } from 'primeng/editor'
import { CalendarModule } from 'primeng/calendar';
import { ChipsModule } from 'primeng/chips';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { ToastModule } from 'primeng/toast';
import { ListboxModule } from 'primeng/listbox';
import { AvatarModule } from 'primeng/avatar';
import { MenuModule } from 'primeng/menu';
import { BadgeModule } from 'primeng/badge';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { CheckboxModule } from 'primeng/checkbox';
import { TriStateCheckboxModule } from 'primeng/tristatecheckbox';
import { TaskCardComponent } from './task-card/task-card.component';
import { TaskService } from 'src/app/service/task.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AppsTaskListRoutingModule,
    ButtonModule,
    InputTextModule,
    EditorModule,
    CalendarModule,
    ChipsModule,
    ToastModule,
    AutoCompleteModule,
    ListboxModule,
    AvatarModule,
    AvatarGroupModule,
    CheckboxModule,
    TriStateCheckboxModule,
    MenuModule,
    BadgeModule
  ],
  declarations: [AppsTaskListComponent, CreateTaskComponent, TaskCardComponent],
  providers: [TaskService]
})
export class AppsTaskListModule { }
