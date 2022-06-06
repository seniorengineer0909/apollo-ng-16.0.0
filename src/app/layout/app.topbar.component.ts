import { Component, OnDestroy } from '@angular/core';
import { BreadcrumbService } from 'src/app/service/app.breadcrumb.service';
import { Subscription } from 'rxjs';
import { MenuItem } from 'primeng/api';
import { AppLayoutComponent } from './app.layout.component';

@Component({
    selector: 'app-topbar',
    templateUrl: './app.topbar.component.html'
})
export class AppTopbarComponent implements OnDestroy {

    subscription: Subscription;

    items: MenuItem[];

    constructor(public breadcrumbService: BreadcrumbService, public appLayout: AppLayoutComponent) {
        this.subscription = breadcrumbService.itemsHandler.subscribe(response => {
            this.items = response;
        });
    }

    onMenuButtonClick() {
        this.appLayout.onMenuButtonClick();
    }

    onProfileButtonClick() {
        this.appLayout.profileSidebarVisible = true;
    }

    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
}