import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Member } from 'src/app/api/member';
import { Task } from 'src/app/api/task';
import { BreadcrumbService } from 'src/app/service/app.breadcrumb.service';
import { MemberService } from 'src/app/service/memberservice';
import { TaskService } from 'src/app/service/taskservice';

@Component({
    selector: 'app-create-task',
    templateUrl: './create-task.component.html',
    styleUrls: ['./create-task.component.scss', '../../../../../assets/demo/editor.scss'],
    providers: [MessageService, MemberService]
})
export class CreateTaskComponent implements OnInit {
    
    task: Task;
    
    members: Member[];
    
    filteredMembers: Member[];
    
    constructor(public breadcrumbService: BreadcrumbService, private memberService: MemberService, private messageService: MessageService, private taskService: TaskService) {
        this.breadcrumbService.setItems([
            {label: 'Create Task'}
        ]);
    }

    ngOnInit(): void {
        this.memberService.getMembers().then(members => this.members = members);
        this.resetTask();
    }

    filterMembers(event) {
        let filtered: Member[] = [];
        let query = event.query;

        for(let i = 0; i < this.members.length; i++) {
            let member = this.members[i];
            if (member.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
                filtered.push(member);
            }
        }

        this.filteredMembers = filtered;
    }

    save() {
        const id = Math.floor(Math.random() * 1000);
        this.task = {...this.task, id};
        this.taskService.addTask(this.task)
        this.messageService.add({severity: 'success', summary: 'Success', detail: `Task "${this.task.name}" created successfully.`});
    }

    resetTask() {
        this.task = {id: null, name: '', description: '', startDate: null, endDate: null, members: [], completed: null, status: 'Waiting'};
    }
}