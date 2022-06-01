import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'bloglistcard',
    templateUrl: './bloglistcard.component.html',
})
export class BloglistcardComponent {

    @Input() blog: any;

    constructor(private router:Router){}

    navigateToDetail(): void {
        this.router.navigateByUrl("/blog/detail");
    }
}
