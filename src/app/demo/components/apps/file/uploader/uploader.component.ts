import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
    selector: 'file-uploader',
    templateUrl: './uploader.component.html',
    providers: [MessageService]
})
export class UploaderComponent {

    uploadedFiles: any[] = [];

    constructor(private messageService: MessageService) {}

    onUpload(event: any) {
        for (let file of event.files) {
            this.uploadedFiles.push(file);
        }

        this.messageService.add({severity:'success', summary: 'Success', detail: 'File uploaded successfully'});
    }

    removeImage(event: Event, file: any) {
        event.stopPropagation();
        this.uploadedFiles = this.uploadedFiles.filter(i => i !== file);
    }

}