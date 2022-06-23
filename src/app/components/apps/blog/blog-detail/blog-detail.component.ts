import { Component } from '@angular/core';
import { Comment } from 'src/app/api/blog';
@Component({
    selector: 'app-blog-detail',
    templateUrl: './blog-detail.component.html'
})
export class BlogDetailComponent {

    comments: Comment[] = [
        {
            image: "/assets/demo/images/blog/blog-profile/blog-profile-3.png",
            name: "Courtney Henry",
            date: "03 February 2022",
            description: "Reprehenderit ut voluptas sapiente ratione nostrum est."
        },
        {
            image: "/assets/demo/images/blog/blog-profile/blog-profile-4.png",
            name: "Esther Howard",
            date: "03 February 2022",
            description: "How likely are you to recommend our company to your friends and family ?"
        },
        {
            image: "/assets/demo/images/blog/blog-profile/blog-profile-2.png",
            name: "Darlene Robertson",
            date: "03 February 2022",
            description: "Quo quia sit nihil nemo doloremque et."
        },
        {
            image: "/assets/demo/images/blog/blog-profile/blog-profile-5.png",
            name: "Esther Howard",
            date: "03 February 2022",
            description: "How likely are you to recommend our company to your friends and family ?"
        }
    ];
}
