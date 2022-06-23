import { Component, Input, OnInit } from '@angular/core';
import { Comment } from 'src/app/api/blog';


@Component({
    selector: 'app-blog-comments-list',
    templateUrl: './blog-comments-list.component.html',
    styleUrls:['../../bloglist/bloglist.component.scss']
})
export class BlogCommentsListComponent {

    @Input() comments: Comment[] = [];

    rowCount = 3;
}
