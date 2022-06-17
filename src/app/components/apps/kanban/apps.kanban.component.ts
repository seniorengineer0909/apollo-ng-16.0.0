import { Component, OnInit, OnDestroy, ViewChildren, QueryList } from '@angular/core';
import { KanbanList } from 'src/app/api/kanban';
import { BreadcrumbService } from 'src/app/service/app.breadcrumb.service';
import { KanbanService } from 'src/app/service/kanbanservice';
import { Subscription } from 'rxjs';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { KanbanListComponent } from './kanban-list/kanban-list.component';

@Component({
    selector: 'app-apps.kanban',
    templateUrl: './apps.kanban.component.html',
    styleUrls: ['./apps.kanban.component.scss']
})
export class AppsKanbanComponent implements OnInit, OnDestroy {

    sidebarVisible: boolean;

    lists: KanbanList[];

    listIds: string[];

    subscription = new Subscription();

    listElements;

    style: HTMLStyleElement;

    @ViewChildren('listEl') listEl: QueryList<KanbanListComponent>;

    constructor(private breadcrumbService: BreadcrumbService, private kanbanService: KanbanService) { 
        this.breadcrumbService.setItems([
            {label: 'Kanban'}
        ]);

        this.subscription = this.kanbanService.lists$.subscribe(data => {
            this.lists = data
            this.listIds = data.map(l => l.listId);
        });
    }

    ngOnInit() {
        this.removeLayoutResponsive();
    }

    toggleSidebar() {
        this.sidebarVisible = true;
    }

    addList() {
        this.kanbanService.addList();
    }

    dropList(event: CdkDragDrop<KanbanList[]>){
        moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    }

    onDragStart() {
        this.listElements = this.listEl.toArray();

        for(let i = 0; i < this.listElements.length; i++) {
            let el = this.listElements[i];
            el.listEl.nativeElement.style.minHeight = "10rem";
        }
    }

    onDragEnd() {        
        for(let i = 0; i < this.listElements.length; i++) {
            let el = this.listElements[i];
            el.listEl.nativeElement.style.minHeight = "";
        }
    }

    removeLayoutResponsive() {
        this.style = document.createElement('style');
        this.style.innerHTML = `
                .layout-content {
                        margin: auto;
                        width: 100%;
                }
            `;
        document.head.appendChild(this.style);
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
        document.head.removeChild(this.style)
    }
}
