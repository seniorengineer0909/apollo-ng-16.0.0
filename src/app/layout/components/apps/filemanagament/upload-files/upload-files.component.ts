import { Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';

@Component({
    selector: 'app-upload-files',
    templateUrl: './upload-files.component.html',
})
export class UploadFilesComponent  {

    @ViewChildren('buttonEl') buttonEl: QueryList<ElementRef>;

    uploadedFiles = [];

    showRemove: boolean = false;


    onUpload(event) {
        for (let file of event.files) {
            this.uploadedFiles.push(file);
        }
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

    removeImage(file) {
        this.uploadedFiles = this.uploadedFiles.filter(i => i !== file);
    }

}
