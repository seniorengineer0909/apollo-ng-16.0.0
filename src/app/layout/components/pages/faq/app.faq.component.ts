import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { BreadcrumbService } from 'src/app/service/app.breadcrumb.service';
import { MenuItem } from 'primeng/api';

@Component({
    selector: 'app-faq',
    templateUrl: './app.faq.component.html',
    styleUrls: ['./app.faq.component.scss'],
    animations: [
        trigger('tabContent', [
            state('hidden', style({
                height: '0',
                overflow: 'hidden'
            })),
            state('void', style({
                height: '{{height}}'
            }), {params: {height: '0'}}),
            state('visible', style({
                height: '*'
            })),
            transition('visible <=> hidden', [style({ overflow: 'hidden'}), animate('{{transitionParams}}')]),
            transition('void => hidden', animate('{{transitionParams}}')),
            transition('void => visible', animate('{{transitionParams}}'))
        ])
  ],
})
export class AppFaqComponent implements OnInit {
    
    items: MenuItem[];

    content: string = `Mailing`;

    tabContent: any[];

    transitionOptions: string = '400ms cubic-bezier(0.86, 0, 0.07, 1)';

    activeIndex: number = 0;

    constructor(private breadcrumbService: BreadcrumbService) {
        this.breadcrumbService.setItems([
            {label: 'FAQ'}
        ]);
    }

    ngOnInit(): void {
        this.items = [
          {label: 'Mailing', icon: 'pi pi-fw pi-envelope', command: () => this.changeContent(0)},
          {label: 'General', icon: 'pi pi-fw pi-inbox', command: () => this.changeContent(1)},
          {label: 'Blocked', icon: 'pi pi-fw pi-ban', command: () => this.changeContent(2)},
          {label: 'Important', icon: 'pi pi-fw pi-bookmark', command: () => this.changeContent(3)},
        ];

        this.tabContent = [
          {header: 'How does it work?', text: 'First, a disclaimer – the entire process of writing a blog post often takes more than a couple of hours, even if you can type eighty words as per minute and your writing skills are sharp. First, a disclaimer – the entire process of writing a blog post often takes more than a couple of hours, even if you can type eighty words as per minute and your writing skills are sharp.', collapsed: false},
          {header: 'Semper vitae arcu eget non viverra tortor est elementum ullamcorper.', text: 'First, a disclaimer – the entire process of writing a blog post often takes more than a couple of hours, even if you can type eighty words as per minute and your writing skills are sharp. First, a disclaimer – the entire process of writing a blog post often takes more than a couple of hours, even if you can type eighty words as per minute and your writing skills are sharp.', collapsed: true},
          {header: 'Quis tellus vestibulum luctus nulla facilisis nulla vulputate tortor.', text: 'First, a disclaimer – the entire process of writing a blog post often takes more than a couple of hours, even if you can type eighty words as per minute and your writing skills are sharp. First, a disclaimer – the entire process of writing a blog post often takes more than a couple of hours, even if you can type eighty words as per minute and your writing skills are sharp.', collapsed: true},
          {header: 'Duis augue sit eget cursus iaculis gravida urna nulla volutpat.', text: 'First, a disclaimer – the entire process of writing a blog post often takes more than a couple of hours, even if you can type eighty words as per minute and your writing skills are sharp. First, a disclaimer – the entire process of writing a blog post often takes more than a couple of hours, even if you can type eighty words as per minute and your writing skills are sharp.', collapsed: true},
          {header: 'Semper vitae arcu eget non viverra tortor est elementum ullamcorper.', text: 'First, a disclaimer – the entire process of writing a blog post often takes more than a couple of hours, even if you can type eighty words as per minute and your writing skills are sharp. First, a disclaimer – the entire process of writing a blog post often takes more than a couple of hours, even if you can type eighty words as per minute and your writing skills are sharp.', collapsed: true},
          {header: 'Tellus ultrices eget facilisi felis, duis et.', text: 'First, a disclaimer – the entire process of writing a blog post often takes more than a couple of hours, even if you can type eighty words as per minute and your writing skills are sharp. First, a disclaimer – the entire process of writing a blog post often takes more than a couple of hours, even if you can type eighty words as per minute and your writing skills are sharp.', collapsed: true},
          {header: 'Quis tellus vestibulum luctus nulla facilisis nulla vulputate tortor.', text: 'First, a disclaimer – the entire process of writing a blog post often takes more than a couple of hours, even if you can type eighty words as per minute and your writing skills are sharp. First, a disclaimer – the entire process of writing a blog post often takes more than a couple of hours, even if you can type eighty words as per minute and your writing skills are sharp.', collapsed: true}
        ];
    };

    changeContent(index) {
        this.activeIndex = index;
        this.tabContent.unshift(this.tabContent[this.tabContent.length -1]);
        this.tabContent.pop();
    }
}
