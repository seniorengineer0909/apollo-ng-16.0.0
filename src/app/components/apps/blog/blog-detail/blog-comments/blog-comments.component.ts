import { Component, Input, OnInit } from '@angular/core';
import { Comment } from 'src/app/api/blog';


@Component({
    selector: 'blog-comments',
    templateUrl: './blog-comments.component.html',
    styleUrls:['../../bloglist/bloglist.component.scss']
})
export class BlogCommentsComponent {

    @Input() comments: Comment[] = [];

    rowCount = 3;
}
