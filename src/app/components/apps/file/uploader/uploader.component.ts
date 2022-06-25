import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
    selector: 'file-uploader',
    templateUrl: './uploader.component.html',
    providers: [MessageService]
})
export class UploaderComponent {

    uploadedFiles = [];

    constructor(private messageService: MessageService) {}

    onUpload(event) {
        for (let file of event.files) {
            this.uploadedFiles.push(file);
        }

        this.messageService.add({severity:'success', summary: 'Success', detail: 'File uploaded successfully'});
    }

    removeImage(event, file) {
        event.stopPropagation();
        this.uploadedFiles = this.uploadedFiles.filter(i => i !== file);
    }

}