import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TaskListAppRoutingModule } from './tasklist.app-routing.module';
import { TaskListAppComponent } from './tasklist.app.component';
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
import { DialogModule } from 'primeng/dialog';
import { TaskCardComponent } from './task-card/task-card.component';
import { TaskService } from './service/task.service';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        TaskListAppRoutingModule,
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
        MenuModule,
        BadgeModule,
        DialogModule
    ],
    declarations: [TaskListAppComponent, CreateTaskComponent, TaskCardComponent],
    providers: [TaskService]
})
export class TaskListAppModule { }
