import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { AppConfig } from 'src/app/api/app.config';

interface LayoutState {
    staticMenuDesktopInactive?: boolean;
    overlayMenuActive?: boolean;
    profileSidebarVisible?: boolean;
    configSidebarVisible?: boolean;
    staticMenuMobileActive?: boolean;
}

@Injectable()
export class LayoutService {

    config: AppConfig = {
        theme: 'indigo',
        darkMode: false,
        inputStyle: 'outlined',
        ripple: true
    };

    state: LayoutState = {
        staticMenuDesktopInactive: false,
        overlayMenuActive: false,
        profileSidebarVisible: false,
        configSidebarVisible: false,
        staticMenuMobileActive: false
    };

    menuHoverActive = false;

    private configUpdate = new Subject<AppConfig>();

    configUpdate$ = this.configUpdate.asObservable();

    updateConfig(config: AppConfig) {
        this.config = config;
        this.configUpdate.next(config);
    }

    getConfig() {
        return this.config;
    }

    onMenuToggle() {
        //this.menuClick = true;

        if (this.isOverlay()) {
            this.state.overlayMenuActive = !this.state.overlayMenuActive;
        }

        if (this.isDesktop()) {
            this.state.staticMenuDesktopInactive = !this.state.staticMenuDesktopInactive;
        } 
        else {
            this.state.staticMenuMobileActive = !this.state.staticMenuMobileActive;
            if (this.state.staticMenuMobileActive) {
                this.blockBodyScroll();
            } else {
                this.unblockBodyScroll();
            }
        }
    }

    showProfileSidebar() {
        this.state.profileSidebarVisible = true;
    }

    showConfigSidebar() {
        this.state.configSidebarVisible = true;
    }

    isOverlay() {
        return this.config.menuMode === 'overlay';
    }

    isDesktop() {
        return window.innerWidth > 1091;
    }

    isSlim() {
        return this.config.menuMode === 'slim';
    }

    isHorizontal() {
        return this.config.menuMode === 'horizontal';
    }

    isMobile() {
        return window.innerWidth <= 1091;
    }
    
    onMenuClick() {
        throw "Error";
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
