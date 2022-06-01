import { Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { BreadcrumbService } from 'src/app/service/app.breadcrumb.service';

interface blog {
    name: string;
    code: string;
    status: string;
    tags: string[];
    description: string;
    images: string[];
}

@Component({
    selector: 'app-blogedit',
    templateUrl: './blogedit.component.html',
    styleUrls: ['../bloglist/bloglist.component.scss', '../../../../../assets/demo/editor.scss']

})

export class BlogeditComponent {

    @ViewChildren('buttonEl') buttonEl: QueryList<ElementRef>;

    text: string;

    blog: blog = {
        name: '',
        code: '',
        description: '',
        status: '',
        tags: ['Sports'],
        images: []
    };

    uploadedFiles: any[] = [];

    showRemove = false;

    constructor(private breadcrumbService: BreadcrumbService) {
        this.breadcrumbService.setItems([
            { label: 'Blog Edit' },
        ]);
    }

    onChipRemove(item) {
        this.blog.tags = this.blog.tags.filter(i => i !== item);
      }

    onUpload(event) {
        for (let file of event.files) {
            this.blog.images.push(file);
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
        this.blog.images = this.blog.images.filter(i => i !== file);
    }

}

