import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { LayoutService } from '../service/app.layout.service';
import { MenuService } from './app.menu.service';

@Component({
    selector: 'app-layout',
    templateUrl: './app.layout.component.html'
})
export class AppLayoutComponent implements OnInit {

    darkMode: boolean;

    menuMode = 'static';

    menuHoverActive = false;

    menuClick: boolean;

    staticMenuMobileActive: boolean;

    staticMenuDesktopInactive: boolean;

    overlayMenuActive: boolean;

    resetMenu: boolean;

    profileSidebarVisible: boolean;

    configVisible: boolean;

    inputStyle: string = 'outlined';

    ripple: boolean;

    constructor(private menuService: MenuService, private primengConfig: PrimeNGConfig, public layoutService: LayoutService) {}

    ngOnInit() {
        this.primengConfig.ripple = true;
        this.layoutService.config = {
            ripple: false,
            inputStyle: 'outlined',
            menuMode: 'static',
            darkMode: false,
            theme: 'indigo'
        };
        this.ripple = false;
    }

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
        /*if (!this.menuClick) {
            if (this.isSlim() || this.isHorizontal()) {
                this.menuService.reset();
            }

            if (this.layoutService.state.overlayMenuActive || this.layoutService.state.staticMenuMobileActive) {
                this.hideOverlayMenu();
            }

            this.menuHoverActive = false;
            this.unblockBodyScroll();
        }

        this.menuClick = false;*/
    }

    hideOverlayMenu() {
        this.overlayMenuActive = false;
        this.staticMenuMobileActive = false;
    }

    onMenuClick() {
        this.menuClick = true;
        this.resetMenu = false;
    }

    onRippleChange(event) {
        this.ripple = event.checked;
    }

    get containerClass() {
        return {
            'layout-light': !this.layoutService.config.darkMode,
            'layout-dark': this.layoutService.config.darkMode,
            'layout-overlay': this.layoutService.config.menuMode === 'overlay',
            'layout-static': this.layoutService.config.menuMode === 'static',
            'layout-slim': this.layoutService.config.menuMode === 'slim',
            'layout-horizontal': this.layoutService.config.menuMode === 'horizontal',
            'layout-static-inactive': this.layoutService.state.staticMenuDesktopInactive && this.layoutService.config.menuMode === 'static',
            'layout-overlay-active': this.layoutService.state.overlayMenuActive,
            'layout-mobile-active': this.layoutService.state.staticMenuMobileActive,
            'p-input-filled': this.layoutService.config.inputStyle === 'filled',
            'p-ripple-disabled': !this.layoutService.config.ripple
        }
    }

}
