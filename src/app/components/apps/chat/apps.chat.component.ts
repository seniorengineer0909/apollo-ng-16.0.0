import { Component, OnInit, OnDestroy, ElementRef, ViewChild } from '@angular/core';
import { ChatService } from 'src/app/service/chatservice';
import { BreadcrumbService } from 'src/app/service/app.breadcrumb.service';
import { Subscription } from 'rxjs';
import { User } from 'src/app/api/user';

@Component({
    selector: 'app-apps.chat',
    templateUrl: './apps.chat.component.html',
    styleUrls: ['./apps.chat.component.scss']
})
export class AppsChatComponent implements OnInit, OnDestroy {

    subscription: Subscription;

    activeUser: User;
    
    constructor(public breadcrumbService: BreadcrumbService, private chatService: ChatService) { 
        this.breadcrumbService.setItems([
            {label: 'Chat'}
        ]);

        this.subscription = this.chatService.activeUser$.subscribe(data => this.activeUser = data);
    }

    ngOnInit(): void {
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
