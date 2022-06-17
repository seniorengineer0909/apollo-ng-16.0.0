import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { KanbanList } from 'src/app/api/kanban';
import { KanbanService } from 'src/app/service/kanbanservice';
import { AppsKanbanComponent } from '../apps.kanban.component';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
    selector: 'kanban-list',
    templateUrl: './kanban-list.component.html',
    styleUrls: ['./kanban-list.component.scss'],
    host: {
        'class' : 'p-kanban-list'
    }
})
export class KanbanListComponent implements OnInit {

    @Input() list: KanbanList;

    @Input() listIds: string[];

    menuItems: MenuItem[];

    title: string;

    timeout = null;

    @ViewChild('inputEl') inputEl: ElementRef;

    @ViewChild('listEl') listEl: ElementRef;

    constructor(public parent: AppsKanbanComponent, private kanbanService: KanbanService) {}

    ngOnInit(): void {
        this.menuItems = [
            {label:'List actions',  items: [
                {separator: true},
                {label:'Copy list',  command: () => this.onCopy(this.list)},
                {label:'Remove list', command: () => this.onDelete(this.list.listId)},
            ]}
        ];
    };

    toggleSidebar() {
        this.parent.sidebarVisible = true;
    }

    onDelete(id) {
        this.kanbanService.deleteList(id);
    }

    onCopy(list) {
        this.kanbanService.copyList(list);
    }

    onCardClick(card) {
        this.kanbanService.onCardSelect(card, this.list.listId);
        this.parent.sidebarVisible = true;
    }

    insertCard() {
        this.kanbanService.addCard(this.list.listId);
    }

    dropCard(event: CdkDragDrop<string[]>): void {
        if (event.previousContainer === event.container) {
          moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
        } else {
            transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
        }
    }

    focus() {
        this.timeout = setTimeout(() => this.inputEl.nativeElement.focus(), 1);
    }
}
