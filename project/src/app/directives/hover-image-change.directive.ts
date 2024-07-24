import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHoverImageChange]'
})
export class HoverImageChangeDirective {
  @Input() appHoverImageChange: any = '';
  @Input() originalSrc: any = '';

  private imgElement: HTMLImageElement | null = null;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.imgElement = this.el.nativeElement.querySelector('img');
    if (this.imgElement) {
      this.originalSrc = this.imgElement.src;
    }
  }

  @HostListener('mouseenter') onMouseEnter() {
    if (this.imgElement) {
      this.imgElement.src = this.appHoverImageChange;
    }
  }

  @HostListener('mouseleave') onMouseLeave() {
    if (this.imgElement) {
      this.imgElement.src = this.originalSrc;
    }
  }
}
