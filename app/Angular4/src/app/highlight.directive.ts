import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
    selector: '[highlight]',
})
export class HighlightDirective {
    constructor(elementRef: ElementRef,render:Renderer){
        render.setElementStyle(elementRef.nativeElement,"background","yellow");
    }
}