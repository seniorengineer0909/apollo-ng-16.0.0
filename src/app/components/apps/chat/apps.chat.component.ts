import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from 'src/app/api/user';
import { ChatService } from './service/chat.service';

@Component({
    selector: 'app-apps.chat',
    templateUrl: './apps.chat.component.html',
    styleUrls: ['./apps.chat.component.scss']
})
export class AppsChatComponent implements OnDestroy {

    subscription: Subscription;

    activeUser: User;
    
    constructor(private chatService: ChatService) { 
        this.subscription = this.chatService.activeUser$.subscribe(data => this.activeUser = data);
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
