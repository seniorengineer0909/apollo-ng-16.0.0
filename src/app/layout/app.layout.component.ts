import { Component } from '@angular/core';

@Component({
    selector: 'app-layout',
    templateUrl: './app.layout.component.html'
})
export class AppLayoutComponent {

    darkMode: boolean;

    menuMode = 'static';

    menuHoverActive = false;

    staticMenuMobileActive: boolean;

    isSlim() {
        return this.menuMode === 'slim';
    }

    isHorizontal() {
        return this.menuMode === 'horizontal';
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

}