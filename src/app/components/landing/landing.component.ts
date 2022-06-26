import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    templateUrl: './landing.component.html',
    styleUrls: ['./landing.component.scss']
})
export class LandingComponent {

    startPos;

    parentWidth;

    width = '0px';

    dragging: boolean = false;

    @ViewChild('splitter') splitterViewChild: ElementRef;

    constructor(public router: Router) { }

    dragStart() {
        this.dragging = true;
        this.splitterViewChild.nativeElement.style.cursor = 'grabbing'
    }

    dragEnd() {
        this.dragging = false;
        this.splitterViewChild.nativeElement.style.cursor = 'pointer'
    }

    move(e) {
        if(this.dragging) {
            let endPos = e.pointerPosition.x;
            let diff = endPos - this.startPos;
    
            if (diff > this.parentWidth || diff <= 0) {
                return;
            }
            else if (diff !== this.parentWidth && diff !== 0) {
                this.width = diff  + 'px';
            }
        }
    }

    onMouseDown(event) {
        if (this.startPos) {
            return;
        } else {
            this.startPos = event.clientX;
            this.parentWidth = this.getOuterWidth(this.splitterViewChild.nativeElement.parentElement);
        }
    }

    getOuterWidth(el, margin?) {
        let width = el.offsetWidth;

        if (margin) {
            let style = getComputedStyle(el);
            width += parseFloat(style.marginLeft) + parseFloat(style.marginRight);
        }
        
        return width;
    }
}
