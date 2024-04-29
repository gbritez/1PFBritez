import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appTitle]'
})
export class TitleDirective {

  constructor(private element: ElementRef) {
    element.nativeElement.style.fontSize = '20px'
  }

}
