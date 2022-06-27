import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';

@Component({
    templateUrl: './blog-edit.component.html',
    styleUrls: ['./blog-edit.component.scss']
})
export class BlogEditComponent {

    @ViewChildren('buttonEl') buttonEl: QueryList<ElementRef>;

    image: any;

    objectURL: string;

    tags: string[] = ['Software', 'Web'];

    onUpload(event) {
        let file = event.files[0];
        file.objectURL = file.objectURL ? file.objectURL : this.objectURL;

        if (!file.objectURL) {
            return;
        }
        else {
            this.image = file;
            this.objectURL = file.objectURL;
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

    removeImage() {
        this.image = null;
    }

}

