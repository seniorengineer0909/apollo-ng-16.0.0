import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Task } from '../api/task';

@Injectable()
export class TaskService {

    tasks:Task[] = [];

    private taskSource = new BehaviorSubject<Task[]>(this.tasks);

    taskSource$ = this.taskSource.asObservable();

    constructor(private http: HttpClient) { 
        this.http.get<any>('assets/demo/data/tasks.json')
        .toPromise()
        .then(res => res.data as Task[])
        .then(data => {
            this.tasks = data;
            this.taskSource.next(data);
        });
    }

    addTask(task: Task){
        this.tasks = [...this.tasks, task];
        this.taskSource.next(this.tasks);
    }

    removeTask(id: number) {
        this.tasks = this.tasks.filter(t => t.id !== id);
        this.taskSource.next(this.tasks);
    }
}