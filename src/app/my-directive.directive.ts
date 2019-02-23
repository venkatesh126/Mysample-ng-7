import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appMyDirective]'
})
export class MyDirectiveDirective {
  @Input() defaultColor: string;

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.el.nativeElement.style.background=this.defaultColor;
  }

  constructor(private el: ElementRef) {
    this.el.nativeElement.style.background = 'red';
  }
  @HostListener('mouseenter') onMouseEnter() {
    this.el.nativeElement.style.background = 'green';
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.style.background = 'yellow';
  }
}

