import { Component } from '@angular/core';
import { MenuService } from './app.menu.service';

@Component({
    selector: 'app-layout',
    templateUrl: './app.layout.component.html'
})
export class AppLayoutComponent {

    darkMode: boolean;

    menuMode = 'static';

    menuHoverActive = false;

    menuClick: boolean;

    staticMenuMobileActive: boolean;

    staticMenuDesktopInactive: boolean;

    overlayMenuActive: boolean;

    resetMenu: boolean;

    profileSidebarVisible: boolean;

    constructor(private menuService: MenuService) {}

    isSlim() {
        return this.menuMode === 'slim';
    }

    isHorizontal() {
        return this.menuMode === 'horizontal';
    }

    isOverlay() {
        return this.menuMode === 'overlay';
    }

    isDesktop() {
        return window.innerWidth > 1091;
    }

    isMobile() {
        return window.innerWidth <= 1091;
    }

    blockBodyScroll(): void {
        if (document.body.classList) {
            document.body.classList.add('blocked-scroll');
        } else {
            document.body.className += ' blocked-scroll';
        }
    }

    unblockBodyScroll(): void {
        if (document.body.classList) {
            document.body.classList.remove('blocked-scroll');
        } else {
            document.body.className = document.body.className.replace(new RegExp('(^|\\b)' +
                'blocked-scroll'.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
        }
    }

    onMenuButtonClick() {
        this.menuClick = true;

        if (this.isOverlay()) {
            this.overlayMenuActive = !this.overlayMenuActive;
        }

        if (this.isDesktop()) {
            this.staticMenuDesktopInactive = !this.staticMenuDesktopInactive;
        }
    }

    onLayoutClick() {
        if (!this.menuClick) {
            if (this.isSlim() || this.isHorizontal()) {
                this.menuService.reset();
            }

            if (this.overlayMenuActive || this.staticMenuMobileActive) {
                this.hideOverlayMenu();
            }

            this.menuHoverActive = false;
            this.unblockBodyScroll();
        }

        this.menuClick = false;
    }

    hideOverlayMenu() {
        this.overlayMenuActive = false;
        this.staticMenuMobileActive = false;
    }

    onMenuClick() {
        this.menuClick = true;
        this.resetMenu = false;
    }

}
