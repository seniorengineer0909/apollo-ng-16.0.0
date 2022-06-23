import { Component, OnInit, OnDestroy} from '@angular/core';
import { Task } from 'src/app/api/task';
import { TaskService } from './service/task.service';
import { PrimeNGConfig } from 'primeng/api';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-app.tasklist',
    templateUrl: './apps.tasklist.component.html',
})
export class AppsTaskListComponent implements OnInit {

    subscription: Subscription;

    todo: Task[];

    completed: Task[];

    constructor(private taskService: TaskService, private config: PrimeNGConfig) {
        this.subscription = this.taskService.taskSource$.subscribe(data => this.categorize(data))
    }

    ngOnInit(): void {
        this.config.ripple = false;
    }

    categorize(tasks) {
        this.todo = tasks.filter(t => t.completed === null);
        this.completed = tasks.filter(t => t.completed);
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}