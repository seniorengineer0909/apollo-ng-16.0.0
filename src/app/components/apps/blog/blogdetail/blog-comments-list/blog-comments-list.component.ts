import { Component, Input, OnInit } from '@angular/core';


@Component({
    selector: 'app-blog-comments-list',
    templateUrl: './blog-comments-list.component.html',
    styleUrls:['../../bloglist/bloglist.component.scss']
})
export class BlogCommentsListComponent {

    @Input() comments = [];

    rowCount = 3;
}
