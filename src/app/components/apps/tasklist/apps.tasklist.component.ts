import { Component, OnDestroy } from '@angular/core';
import { Task } from 'src/app/api/task';
import { TaskService } from './service/task.service';
import { PrimeNGConfig } from 'primeng/api';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-app.tasklist',
    templateUrl: './apps.tasklist.component.html'
})
export class AppsTaskListComponent implements OnDestroy {

    subscription: Subscription;

    todo: Task[];

    completed: Task[];

    constructor(private taskService: TaskService, private config: PrimeNGConfig) {
        this.subscription = this.taskService.taskSource$.subscribe(data => this.categorize(data));
    }

    categorize(tasks) {
        this.todo = tasks.filter(t => t.completed !== true);
        this.completed = tasks.filter(t => t.completed);
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    showDialog() {
        this.taskService.showDialog('Create Task');
    }
}