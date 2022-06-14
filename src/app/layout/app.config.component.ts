import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../service/app.config.service';
import { AppLayoutComponent } from './app.layout.component';

@Component({
    selector: 'app-config',
    templateUrl: './app.config.component.html'
})
export class AppConfigComponent implements OnInit {

    componentThemes: any[];

    constructor(public appLayout: AppLayoutComponent, public appConfig: ConfigService) {
    }

    ngOnInit() {
        this.componentThemes = [
            {name: 'blue', color: '#3B82F6'},
            {name: 'indigo', color: '#6366F1'},
            {name: 'purple', color: '#8B5CF6'},
            {name: 'teal', color: '#14B8A6'}
        ];
    }

    onConfigButtonClick() {
        this.appLayout.configVisible = true;
    }

    onDarkModeChange(event) {
        const darkMode = this.appConfig.config.dark;
        const themeLink = <HTMLLinkElement> document.getElementById('theme-link');
        const themeLinkHref = themeLink.getAttribute('href');
        const newHref = darkMode ? themeLinkHref.replace('theme-dark', 'theme-light') : themeLinkHref.replace('theme-light', 'theme-dark');
        this.replaceThemeLink(newHref);
        this.appConfig.config.dark = event.checked;
    }

    changeTheme(theme: string) {
        const themeLink = <HTMLLinkElement> document.getElementById('theme-link');
        const newHref = themeLink.getAttribute('href').replace(this.appConfig.config.theme, theme);
        this.replaceThemeLink(newHref);
        this.appConfig.config.theme = theme;
    }

    replaceThemeLink(href: string) {
        const id = 'theme-link';
        const themeLink = <HTMLLinkElement> document.getElementById('theme-link');
        const cloneLinkElement = <HTMLLinkElement> themeLink.cloneNode(true);

        cloneLinkElement.setAttribute('href', href);
        cloneLinkElement.setAttribute('id', id + '-clone');

        themeLink.parentNode.insertBefore(cloneLinkElement, themeLink.nextSibling);

        cloneLinkElement.addEventListener('load', () => {
            themeLink.remove();
            cloneLinkElement.setAttribute('id', id);
        });
    }
}
