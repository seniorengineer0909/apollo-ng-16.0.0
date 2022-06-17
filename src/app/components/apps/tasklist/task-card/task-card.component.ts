import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Menu } from 'primeng/menu';
import { Task } from 'src/app/api/task';
import { TaskService } from 'src/app/service/task.service';

@Component({
    selector: 'task-card',
    templateUrl: './task-card.component.html',
    styleUrls: ['./task-card.component.scss']
})
export class TaskCardComponent implements OnInit {

    @Input() taskList: Task[];
    
    @Input() title: string;

    @ViewChild('menu') menu: Menu;

    selectedTasks: Task[];

    menuItems: MenuItem[];

    clickedTaskId: number = null;

    constructor(private taskService: TaskService) { }

    ngOnInit(): void {
        this.menuItems = [
            {label: 'Edit', icon: 'pi pi-pencil'},
            {label: 'Delete', icon: 'pi pi-trash', command: () => this.handleDelete()}
        ];
    }

    parseDate(date){
        let d = new Date(date);
        return d.toUTCString().split(' ').slice(1,3).join(' ');
    }

    handleDelete() {
        this.taskService.removeTask(this.clickedTaskId);
    }

    toggleMenu(event: Event, id: number){
        this.clickedTaskId = id;
        this.menu.toggle(event);
    }
}
