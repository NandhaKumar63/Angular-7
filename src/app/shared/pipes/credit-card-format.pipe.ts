import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'creditCardFormat'
})
export class CreditCardFormatPipe implements PipeTransform {

  transform(cardNumber: string, config: any): any {
    let maskedSection = cardNumber.slice(0, -config.digits);
    let visibleSection = cardNumber.slice(-config.digits);
    return maskedSection.replace(/./g, config.delimiter) + visibleSection;
  }

}
