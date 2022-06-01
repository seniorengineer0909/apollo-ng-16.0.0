import { Component, OnInit, OnDestroy} from '@angular/core';
import { Task } from 'src/app/api/task';
import { BreadcrumbService } from 'src/app/service/app.breadcrumb.service';
import { TaskService } from 'src/app/service/taskservice';
import { PrimeNGConfig } from 'primeng/api';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-app.tasklist',
    templateUrl: './apps.tasklist.component.html',
})
export class AppsTaskListComponent implements OnInit {

    subscription: Subscription;

    upcoming: Task[];

    inProgress: Task[];

    completed: Task[];

    constructor(public breadcrumbService: BreadcrumbService, private taskService: TaskService, private config: PrimeNGConfig) {
        this.breadcrumbService.setItems([
            {label: 'Task List'}
        ]);
        this.subscription = this.taskService.taskSource$.subscribe(data => this.categorize(data))
    }

    ngOnInit(): void {
        this.config.ripple = false;
    }

    categorize(tasks) {
        this.upcoming = tasks.filter(t => t.completed === null);
        this.inProgress = tasks.filter(t => t.completed === false);
        this.completed = tasks.filter(t => t.completed);
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}