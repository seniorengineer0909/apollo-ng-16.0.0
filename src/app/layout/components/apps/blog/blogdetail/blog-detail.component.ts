import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from 'src/app/service/app.breadcrumb.service';

@Component({
    selector: 'app-blog-detail',
    templateUrl: './blog-detail.component.html',

})
export class BlogDetailComponent implements OnInit {

    comments = [
        {
            image: "/assets/demo/images/5.svg",
            name: "Courtney Henry",
            date: "03 February 2022",
            description: "Reprehenderit ut voluptas sapiente ratione nostrum est."
        },
        {
            image: "/assets/demo/images/image-3.svg",
            name: "Esther Howard",
            date: "03 February 2022",
            description: "How likely are you to recommend our company to your friends and family ?"
        },
        {
            image: "assets/demo/images/image.svg",
            name: "Darlene Robertson",
            date: "03 February 2022",
            description: "Quo quia sit nihil nemo doloremque et."
        },
        {
            image: "/assets/demo/images/image-3.svg",
            name: "Esther Howard",
            date: "03 February 2022",
            description: "How likely are you to recommend our company to your friends and family ?"
        },
    ];

    constructor(private breadcrumbService: BreadcrumbService) {
        this.breadcrumbService.setItems([
            { label: 'Blog Detail' },
        ]);
    }

    ngOnInit() {
    }

}
