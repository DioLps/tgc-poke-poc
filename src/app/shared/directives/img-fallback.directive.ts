import { Directive, Input, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: 'img[appImgFallback]',
})
export class ImgFallbackDirective {
  @Input() appImgFallback: string;

  constructor(private eRef: ElementRef) {}

  @HostListener('error')
  public loadFallbackOnError(): void {
    const element: HTMLImageElement = this.eRef.nativeElement;
    element.src = this.appImgFallback || '/assets/fallback/pokebola.jpg';
  }
}
