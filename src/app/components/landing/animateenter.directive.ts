import {  Directive, ElementRef, AfterViewInit, OnDestroy, Renderer2, Input } from '@angular/core';

@Directive({
    selector: '[animateEnter]',
    host: {
        '[class.visibility-hidden]': 'true'
    }
})
export class AnimateEnter implements AfterViewInit, OnDestroy {

    @Input('animateEnter') animation: string;

    documentScrollListener: Function;

    entered: boolean;

    constructor(public el: ElementRef, public renderer: Renderer2) { }

    ngAfterViewInit() {
        if (this.isInViewPort()) {
            this.enter();
        }

        if (!this.entered) {
            this.documentScrollListener = this.renderer.listen('window', 'scroll', () => {
                if (this.isInViewPort()) {
                    this.enter();
                    this.documentScrollListener();
                    this.documentScrollListener = null;
                }
            });
        }
    }

    shouldEnter(): boolean {
        return this.entered ? false: this.isInViewPort();
    }

    isInViewPort() {
        let rect = this.el.nativeElement.getBoundingClientRect();
        let docElement = document.documentElement;
        let winHeight = docElement.clientHeight;

        return winHeight >= (rect.top + 100);
    }

    enter(): void {
        this.el.nativeElement.classList.add('hidden', this.animation);
        this.el.nativeElement.classList.remove('visibility-hidden', 'hidden');
        this.entered = true;
    }

    ngOnDestroy() {
        if (this.documentScrollListener) {
            this.documentScrollListener();
        }
    }
}
