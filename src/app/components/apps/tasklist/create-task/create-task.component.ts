import { Component, OnInit, OnDestroy } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Member } from 'src/app/api/member';
import { DialogConfig, Task } from 'src/app/api/task';
import { TaskService } from '../service/task.service';
import { MemberService } from 'src/app/service/member.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'create-task',
    templateUrl: './create-task.component.html',
    styleUrls: ['./create-task.component.scss'],
    providers: [MessageService]
})
export class CreateTaskComponent implements OnInit, OnDestroy {

    task: Task;

    members: Member[];

    filteredMembers: Member[];

    dialogConfig: DialogConfig;

    subscription: Subscription;

    dialogSubscription: Subscription;

    constructor(private memberService: MemberService, private messageService: MessageService, private taskService: TaskService) {
        this.subscription = this.taskService.selectedTask$.subscribe(data => this.task = data);
        this.dialogSubscription = this.taskService.dialogSource$.subscribe(data => this.dialogConfig = data);
    }

    ngOnInit(): void {
        this.memberService.getMembers().then(members => this.members = members);
        this.resetTask();
    }

    filterMembers(event) {
        let filtered: Member[] = [];
        let query = event.query;

        for (let i = 0; i < this.members.length; i++) {
            let member = this.members[i];
            if (member.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
                filtered.push(member);
            }
        }

        this.filteredMembers = filtered;
    }

    save() {
        if (!this.task.id) {
            this.task.id = Math.floor(Math.random() * 1000);
        }
        this.messageService.add({ severity: 'success', summary: 'Success', detail: `Task "${this.task.name}" created successfully.` });
        this.taskService.addTask(this.task);
        this.taskService.closeDialog();
    }

    resetTask() {
        this.task = { id: null, name: '', description: '', startDate: null, endDate: null, members: [], completed: null, status: 'Waiting' };
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
