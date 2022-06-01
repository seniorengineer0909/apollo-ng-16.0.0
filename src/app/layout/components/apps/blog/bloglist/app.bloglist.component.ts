import { Component } from '@angular/core';
import { PrimeNGConfig, SelectItem } from 'primeng/api';
import { BreadcrumbService } from 'src/app/service/app.breadcrumb.service';

interface Blog {
    image: string;
    profile: string;
    title: string;
    description: string;
    comment: number;
    share: number;
    day: "09";
    mounth: "October";
}

@Component({
    selector: 'app-app.bloglist',
    templateUrl: './app.bloglist.component.html',
    styleUrls: ['./bloglist.component.scss']

})
export class AppBloglistComponent {

    rowCount = 6;

    sortOptions: SelectItem[] = [
        { label: 'Share High to Low', value: '!share' },
        { label: 'Share Low to High', value: 'share' }
    ];;

    sortOrder: number;

    sortField: string;

    totalBlogs: Blog[] = [
        {
            image: "assets/demo/images/blog/blog-1.png",
            profile: "assets/demo/images/blog/blog-profile/blog-profile-1.png",
            title: "Blog",
            description: "Ornare egestas pellentesque facilisis in a ultrices erat diam metus integer sed",
            comment: 1,
            share: 3,
            day: "09",
            mounth: "October"
        }, {
            image: "assets/demo/images/blog/blog-2.png",
            profile: "assets/demo/images/blog/blog-profile/blog-profile-2.png",
            title: "Magazine",
            description: "Magna iaculis sagittis, amet faucibus scelerisque non ornare non in penatibus ",
            comment: 1,
            share: 3,
            day: "09",
            mounth: "October"
        }, {
            image: "assets/demo/images/blog/blog-3.png",
            profile: "assets/demo/images/blog/blog-profile/blog-profile-3.png",
            title: "Science",
            description: "Purus mattis mi, libero maecenas volutpat quis a morbi arcu pharetra, mollis",
            comment: 1,
            share: 4,
            day: "09",
            mounth: "October"
        }, {
            image: "assets/demo/images/blog/blog-4.png",
            profile: "assets/demo/images/blog/blog-profile/blog-profile-4.png",
            title: "Blog",
            description: "Curabitur vitae sit justo facilisi nec, sodales proin aliquet libero volutpat nunc",
            comment: 1,
            share: 3,
            day: "09",
            mounth: "October"
        }, {
            image: "assets/demo/images/blog/blog-5.png",
            profile: "assets/demo/images/blog/blog-profile/blog-profile-5.png",
            title: "Magazine",
            description: "Id eget arcu suspendisse ullamcorper dolor lobortis dui et morbi penatibus quam",
            comment: 1,
            share: 3,
            day: "09",
            mounth: "October"
        }, {
            image: "assets/demo/images/blog/blog-6.png",
            profile: "assets/demo/images/blog/blog-profile/blog-profile-6.png",
            title: "Science",
            description: "Sagittis hendrerit laoreet dignissim sed auctor sit pellentesque vel diam iaculis et",
            comment: 1,
            share: 3,
            day: "09",
            mounth: "October"
        }, {
            image: "assets/demo/images/blog/blog-1.png",
            profile: "assets/demo/images/blog/blog-profile/blog-profile-1.png",
            title: "Blog",
            description: "Ornare egestas pellentesque facilisis in a ultrices erat diam metus integer sed",
            comment: 1,
            share: 3,
            day: "09",
            mounth: "October"
        }, {
            image: "assets/demo/images/blog/blog-2.png",
            profile: "assets/demo/images/blog/blog-profile/blog-profile-3.png",
            title: "Magazine",
            description: "Magna iaculis sagittis, amet faucibus scelerisque non ornare non in penatibus ",
            comment: 1,
            share: 3,
            day: "09",
            mounth: "October"
        }, {
            image: "assets/demo/images/blog/blog-3.png",
            profile: "assets/demo/images/blog/blog-profile/blog-profile-2.png",
            title: "Science",
            description: "Purus mattis mi, libero maecenas volutpat quis a morbi arcu pharetra, mollis",
            comment: 1,
            share: 3,
            day: "09",
            mounth: "October"
        }, {
            image: "assets/demo/images/blog/blog-4.png",
            profile: "assets/demo/images/blog/blog-profile/blog-profile-4.png",
            title: "Blog",
            description: "Curabitur vitae sit justo facilisi nec, sodales proin aliquet libero volutpat nunc",
            comment: 1,
            share: 3,
            day: "09",
            mounth: "October"
        }, {
            image: "assets/demo/images/blog/blog-5.png",
            profile: "assets/demo/images/blog/blog-profile/blog-profile-2.png",
            title: "Magazine",
            description: "Id eget arcu suspendisse ullamcorper dolor lobortis dui et morbi penatibus quam",
            comment: 1,
            share: 3,
            day: "09",
            mounth: "October"
        }, {
            image: "assets/demo/images/blog/blog-6.png",
            profile: "assets/demo/images/blog/blog-profile/blog-profile-6.png",
            title: "Science",
            description: "Sagittis hendrerit laoreet dignissim sed auctor sit pellentesque vel diam iaculis et",
            comment: 1,
            share: 3,
            day: "09",
            mounth: "October"
        },
    ];

    constructor(private breadcrumbService: BreadcrumbService, private primengConfig: PrimeNGConfig) {
        this.breadcrumbService.setItems([
            { label: 'Blog List' }
        ]);
        this.primengConfig.ripple = true;
    }

    onSortChange(event): void {
        let value = event.value;

        if (value.indexOf('!') === 0) {
            this.sortOrder = -1;
            this.sortField = value.substring(1, value.length);
        } else {
            this.sortOrder = 1;
            this.sortField = value;
        }
    }


}
