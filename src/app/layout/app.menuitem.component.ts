import {ChangeDetectorRef, Component, Input, OnDestroy, OnInit} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {Subscription} from 'rxjs';
import {filter} from 'rxjs/operators';
import {MenuService} from './app.menu.service';
import {AppLayoutComponent} from './app.layout.component';

@Component({
    /* tslint:disable:component-selector */
    selector: '[app-menuitem]',
    /* tslint:enable:component-selector */
    template: `
		<ng-container>
            <div *ngIf="root && item.visible !== false" class="layout-menuitem-root-text">{{item.label}}</div>
			<a [attr.href]="item.url" (click)="itemClick($event)" *ngIf="(!item.routerLink || item.items) && item.visible !== false" (mouseenter)="onMouseEnter()"
			   (keydown.enter)="itemClick($event)" [ngClass]="item.class" pRipple
			   [attr.target]="item.target">
				<i [ngClass]="item.icon" class="layout-menuitem-icon"></i>
				<span class="layout-menuitem-text">{{item.label}}</span>
				<i class="pi pi-fw layout-submenu-toggler" [ngClass]="!appLayout.isHorizontal() ?'pi-chevron-down': 'pi-angle-down'" *ngIf="item.items"></i>
			</a>
			<a (click)="itemClick($event)" (mouseenter)="onMouseEnter()" *ngIf="(item.routerLink && !item.items) && item.visible !== false"
			   [routerLink]="item.routerLink" routerLinkActive="active-route" [ngClass]="item.class" pRipple
			   [routerLinkActiveOptions]="{exact: !item.preventExact}" [attr.target]="item.target">
				<i [ngClass]="item.icon" class="layout-menuitem-icon"></i>
				<span class="layout-menuitem-text">{{item.label}}</span>
				<i class="pi pi-fw layout-submenu-toggler" [ngClass]="!appLayout.isHorizontal() ?'pi-chevron-down': 'pi-angle-down'" *ngIf="item.items"></i>
			</a>

			<ul *ngIf="item.items && item.visible !== false" role="menu" [@children]="(appLayout.isSlim() || appLayout.isHorizontal()) ? (root ? appLayout.isMobile()? 'visible':
			slimClick && !appLayout.isHorizontal() ? (active  ? 'slimVisibleAnimated' : 'slimHiddenAnimated') : (active ? 'visible' : 'hidden') :
			appLayout.isSlim() || appLayout.isHorizontal() ? (active ? 'visibleAnimated' : 'hiddenAnimated') : (active ? 'visible' : 'hidden')) :
			(root ? 'visible' :(active ? 'visibleAnimated' : 'hiddenAnimated'))">
				<ng-template ngFor let-child let-i="index" [ngForOf]="item.items">
					<li app-menuitem [item]="child" [index]="i" [parentKey]="key" [class]="child.badgeClass"></li>
				</ng-template>
			</ul>
		</ng-container>
    `,
    host: {
        '[class.layout-root-menuitem]': 'root',
        '[class.active-menuitem]': '(active && !root) || (active && (appLayout.isSlim() || appLayout.isHorizontal()))'
    },
    animations: [
        trigger('children', [
            state('void', style({
                height: '0px'
            })),
            state('hiddenAnimated', style({
                height: '0px'
            })),
            state('visibleAnimated', style({
                height: '*'
            })),
            state('visible', style({
                height: '*',
                'z-index': 100
            })),
            state('hidden', style({
                height: '0px',
                'z-index': '*'
            })),
            state('slimVisibleAnimated', style({
                opacity: 1,
                transform: 'none'
            })),
            state('slimHiddenAnimated', style({
                opacity: 0,
                transform: 'translateX(20px)'
            })),
            transition('visibleAnimated => hiddenAnimated', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)')),
            transition('hiddenAnimated => visibleAnimated', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)')),
            transition('void => visibleAnimated, visibleAnimated => void',
                animate('400ms cubic-bezier(0.86, 0, 0.07, 1)')),
            transition('void => slimVisibleAnimated', animate('400ms cubic-bezier(.05,.74,.2,.99)')),
            transition('slimHiddenAnimated => slimVisibleAnimated', animate('400ms cubic-bezier(.05,.74,.2,.99)'))
        ])
    ]
})
export class AppMenuitemComponent implements OnInit, OnDestroy {

    @Input() item: any;

    @Input() index: number;

    @Input() root: boolean;

    @Input() parentKey: string;

    active = false;

    menuSourceSubscription: Subscription;

    menuResetSubscription: Subscription;

    key: string;

    slimClick = false;

    constructor(public appLayout: AppLayoutComponent, public router: Router, private cd: ChangeDetectorRef, private menuService: MenuService) {
        this.menuSourceSubscription = this.menuService.menuSource$.subscribe(key => {
            // deactivate current active menu
            if (this.active && this.key !== key && key.indexOf(this.key) !== 0) {
                this.active = false;
            }
        });

        this.menuResetSubscription = this.menuService.resetSource$.subscribe(() => {
            this.active = false;
        });

        this.router.events.pipe(filter(event => event instanceof NavigationEnd))
            .subscribe(params => {
                if (this.appLayout.isSlim() || this.appLayout.isHorizontal()) {
                    this.active = false;
                } else {
                    if (this.item.routerLink) {
                        this.updateActiveStateFromRoute();
                    } else {
                        this.active = false;
                    }
                }
            });
    }

    ngOnInit() {
        if (!(this.appLayout.isSlim() || this.appLayout.isHorizontal()) && this.item.routerLink) {
            this.updateActiveStateFromRoute();
        }

        this.key = this.parentKey ? this.parentKey + '-' + this.index : String(this.index);
    }

    updateActiveStateFromRoute() {
        this.active = this.router.isActive(this.item.routerLink[0], !this.item.items && !this.item.preventExact);
    }

    itemClick(event: Event) {
        if (this.appLayout.isSlim()) {
            this.slimClick = true;
        }

        // avoid processing disabled items
        if (this.item.disabled) {
            event.preventDefault();
            return;
        }

        // navigate with hover in horizontal mode
        if (this.root) {
            this.appLayout.menuHoverActive = !this.appLayout.menuHoverActive;
        }

        // notify other items
        this.menuService.onMenuStateChange(this.key);

        // execute command
        if (this.item.command) {
            this.item.command({originalEvent: event, item: this.item});
        }

        // toggle active state
        if (this.item.items) {
            this.active = !this.active;
        } else {
            // activate item
            this.active = true;

            if (this.appLayout.isMobile()) {
                this.appLayout.staticMenuMobileActive = false;
            }

            // reset horizontal menu
            if (this.appLayout.isSlim() || this.appLayout.isHorizontal()) {
                this.menuService.reset();
                this.appLayout.menuHoverActive = false;
            }

            this.appLayout.unblockBodyScroll();
        }

        this.removeActiveInk(event);
    }

    onMouseEnter() {
        // activate item on hover
        if (this.root && (this.appLayout.isSlim() || this.appLayout.isHorizontal()) && this.appLayout.isDesktop()) {
            if (this.appLayout.menuHoverActive) {
                this.menuService.onMenuStateChange(this.key);
                this.active = true;
                this.slimClick = false;
            }
            else {
                if (this.appLayout.isSlim()) {
                    this.slimClick = true;
                }
            }
        }
    }
    
    removeActiveInk(event: Event) {
        let currentTarget = (event.currentTarget as HTMLElement);
        setTimeout(() => {
            if (currentTarget) {
                let activeInk = currentTarget.querySelector('.p-ink-active');
                if (activeInk) {
                    if (activeInk.classList)
                        activeInk.classList.remove('p-ink-active');
                    else
                        activeInk.className = activeInk.className.replace(new RegExp('(^|\\b)' + 'p-ink-active'.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
                }
            }
        }, 401);
    }

    ngOnDestroy() {
        if (this.menuSourceSubscription) {
            this.menuSourceSubscription.unsubscribe();
        }

        if (this.menuResetSubscription) {
            this.menuResetSubscription.unsubscribe();
        }
    }
}
