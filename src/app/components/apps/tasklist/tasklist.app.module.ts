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
import { AutoCompleteModule } from 'primeng/autocomplete';
import { ToastModule } from 'primeng/toast';
import { AvatarModule } from 'primeng/avatar';
import { MenuModule } from 'primeng/menu';
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
        ToastModule,
        AutoCompleteModule,
        AvatarModule,
        AvatarGroupModule,
        CheckboxModule,
        MenuModule,
        DialogModule
    ],
    declarations: [TaskListAppComponent, CreateTaskComponent, TaskCardComponent],
    providers: [TaskService]
})
export class TaskListAppModule { }
