import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Message } from 'src/app/api/message';
import { User } from 'src/app/api/user';
import { ChatService } from 'src/app/service/chatservice';

@Component({
    selector: 'chat-box',
    templateUrl: './chat-box.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChatBoxComponent implements OnInit {

    defaultUserId: number = 123;

    message: Message;

    textContent: string;

    @Input() user: User; 

    constructor(private chatService: ChatService) {}

    setMessage() {
        if(this.user) {
          let filteredMessages = this.user.messages.filter(m => m.ownerId !== this.defaultUserId);
          this.message = filteredMessages[filteredMessages.length -1];
        }
    }

    ngOnInit(): void {
        this.setMessage();
    }

    sendMessage() {
        if(this.textContent == '' || this.textContent === ' ') {
          return;
        } else {
          let message = {
              text: this.textContent,
              ownerId: 123,
              createdAt: new Date().getTime(),
          }
  
          this.chatService.sendMessage(message)
          this.textContent = '';
        }

    }

    parseDate(timestamp) {
        return new Date(timestamp).toTimeString().split(':').slice(0,2).join(':');
    }
  
}
