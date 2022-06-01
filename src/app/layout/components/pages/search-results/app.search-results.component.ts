import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from 'src/app/service/app.breadcrumb.service';

@Component({
    selector: 'app-search-results',
    templateUrl: './app.search-results.component.html'
})
export class AppSearchResultsComponent implements OnInit {

    keyword: string = 'Search';

    searchResults: any[];

    tabContent: any[];

    transitionOptions: string = '400ms cubic-bezier(0.86, 0, 0.07, 1)';

    activeIndex: number = 0;

    constructor(private breadcrumbService: BreadcrumbService) { }

    ngOnInit(): void {
      this.breadcrumbService.setItems([
        {label: 'Search Results'}
      ]);

      this.searchResults = [
        {image: 'search-results-1', title: 'How to customize search page results in wordpress', info: 'Dictum purus donec posuere <span class="text-900 font-bold">search</span> viverra pharetra, nisl nec in tortor.'},
        {image: 'search-results-2', title: 'Sed cursus dui mattis enim pulvinar etiam id consectetur.', info: 'Et tortor pretium <span class="text-900 font-bold">search</span> posuere scelerisque imperdiet risus massa.'},
        {image: 'search-results-3', title: 'Scelerisque porttitor elementum et elit non diam.', info: 'Risus dignissim mattis aliquam tincidunt. <span class="text-900 font-bold">Search</span> this content'},
        {image: 'search-results-4', title: 'Facilisis turpis elementum mauris egestas est orci ac.', info: 'Pellentesque ullamcorper aliquam enim vulputate egestas sapien nunc luctu <span class="text-900 font-bold">search</span> faucibus.'},
        {image: 'search-results-5', title: 'How to customize search page results in wordpress', info: 'Dictum purus donec posuere <span class="text-900 font-bold">search</span> viverra pharetra, nisl nec in tortor.'},
        {image: 'search-results-6', title: 'Facilisis turpis elementum mauris egestas est orci ac.', info: 'Pellentesque ullamcorper aliquam enim vulputate egestas sapien nunc luctu <span class="text-900 font-bold">search</span> faucibus.'},
        {image: 'search-results-7', title: 'Scelerisque porttitor elementum et elit non diam.', info: 'Risus dignissim mattis aliquam tincidunt. <span class="text-900 font-bold">Search</span> this content'},
        {image: 'search-results-8', title: 'Sed cursus dui mattis enim pulvinar etiam id consectetur.', info: 'Et tortor pretium <span class="text-900 font-bold">search</span> posuere scelerisque imperdiet risus massa.'},
      ];

      this.tabContent = [
        {icon: 'pi-align-left', header: 'PrimeFlex', text: 'Search Flex', collapsed: false},
        {icon: 'pi-th-large', header: 'Table', text: 'Table Search', collapsed: false},
        {icon: 'pi-search', header: 'Autocomplete', text: 'Search autocomplete', collapsed: false},
      ];
    }
}
