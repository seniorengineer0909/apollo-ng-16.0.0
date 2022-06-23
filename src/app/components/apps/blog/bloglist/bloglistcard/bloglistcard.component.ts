import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Blog } from 'src/app/api/blog';

@Component({
    selector: 'bloglistcard',
    templateUrl: './bloglistcard.component.html',
})
export class BloglistcardComponent {

    @Input() blog: Blog;

    constructor(private router: Router) { }

    navigateToDetail(): void {
        this.router.navigateByUrl("/blog/detail");
    }
}
