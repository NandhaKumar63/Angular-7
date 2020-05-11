import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, NgForm, ValidatorFn, Validators, AbstractControl, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.less']
})
export class ReactiveFormsComponent implements OnInit {

  @ViewChild('form') form: NgForm;
  defaultQuestion = 'mobile';
  answer = '';
  genders = ['male', 'female'];

  requiredForm: FormGroup;

  html: string = '<ng-template appHTML> </ng-template>';
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.buildRequiredForm();
    Validators.required = this.myValidator;
  }
  suggestUsername() {
    this.form.form.patchValue({
      // username: 'nandha',
      email: 'nandharagav@gmail.com',
      question: 'pet',
      answer: '',
      gender: 'male'
    });
  }

  myValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      return this.isEmptyInputValue(control.value) ? { 'required': true } : null;
    };
  }

  isEmptyInputValue(value: any): boolean {
    value = value && value.trim();
    // we don't check for string here so it also works with arrays
    return value == null || value.length === 0;
  }

  onSubmit(): void {
    // 
    console.log(this.form);
  }

  buildRequiredForm(): void {
    this.requiredForm = this.formBuilder.group({
      name: ['', Validators.required]
    });
  }

}
