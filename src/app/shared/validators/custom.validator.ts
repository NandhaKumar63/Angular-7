import { Directive } from '@angular/core';
import { NG_VALIDATORS, Validator, ValidationErrors, AbstractControl } from '@angular/forms';

@Directive({
    selector: '[customValidator]',
    providers: [{ provide: NG_VALIDATORS, useExisting: CustomValidatorDirective, multi: true }]
})
export class CustomValidatorDirective implements Validator {
    validate(control: AbstractControl): ValidationErrors | null {
        console.log('called' + control.value);
        return { 'custom': true };
    }
}