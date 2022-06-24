import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
    selector: 'file-uploader',
    templateUrl: './uploader.component.html',
    providers: [MessageService]
})
export class UploaderComponent {

    @ViewChildren('buttonEl') buttonEl: QueryList<ElementRef>;

    uploadedFiles = [];

    showRemove: boolean = false;

    constructor(private messageService: MessageService) {}

    onUpload(event) {
        for (let file of event.files) {
            this.uploadedFiles.push(file);
        }

        this.messageService.add({severity:'success', summary: 'Success', detail: 'File uploaded successfully'});
    }

    onImageMouseOver(file) {
        this.buttonEl.toArray().forEach(el => {
            el.nativeElement.id === file.name ? el.nativeElement.style.display = 'flex' : null;
        })
    }

    onImageMouseLeave(file) {
        this.buttonEl.toArray().forEach(el => {
            el.nativeElement.id === file.name ? el.nativeElement.style.display = 'none' : null;
        })
    }

    removeImage(event, file) {
        event.stopPropagation();
        this.uploadedFiles = this.uploadedFiles.filter(i => i !== file);
    }

}