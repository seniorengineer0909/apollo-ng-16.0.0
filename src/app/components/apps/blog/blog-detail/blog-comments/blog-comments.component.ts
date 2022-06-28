import { Component, Input } from '@angular/core';
import { Comment } from 'src/app/components/api/blog';

@Component({
    selector: 'blog-comments',
    templateUrl: './blog-comments.component.html'
})
export class BlogCommentsComponent {

    @Input() comments: Comment[] = [];

    rowCount = 3;

}
