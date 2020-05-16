import { Directive, OnInit, HostListener } from '@angular/core';

@Directive({
  selector: '[appOnlyDigits]'
})
export class OnlyDigitsDirective{
  pattern = /^[0-9]*$/;

  constructor() { }

  @HostListener('keydown', ['$event'])
  onChange(event): void {
    let value = event.key;
    if (!this.pattern.test(value)) {
      event.preventDefault();
    }
  }

}
