import { Directive, ElementRef, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appCtaUrl]'
})
export class CtaUrlDirective implements AfterViewInit {

  constructor(private elementRef: ElementRef) {


  }
  ngAfterViewInit(): void {
    this.processContent(this.elementRef);
  }

  processContent(elementRef: ElementRef) {
    const anchorTags: HTMLAnchorElement[] = elementRef.nativeElement.getElementsByTagName('a');
    const tagsLength = anchorTags.length;
    
    for (let i = 0; i < tagsLength; i++) {
      const element = anchorTags[i];
      if (element.href && element.href !== window.location.origin + '/') {
        let url: string = this.processURL(element.href, i);
        element.href = url;
      }
    }
  }

  processURL(url: string, index: number): string {
    if (url) {
      // Logic to replace the url 
      url = url + index;
    }

    return url;
  }
}
