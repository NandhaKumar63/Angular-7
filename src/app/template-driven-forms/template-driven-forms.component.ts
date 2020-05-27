import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven-forms',
  templateUrl: './template-driven-forms.component.html',
  styleUrls: ['./template-driven-forms.component.less']
})
export class TemplateDrivenFormsComponent implements OnInit {

  @ViewChild('signupForm') signUpForm: NgForm;
  defaultQuestion = 'mobile';
  answer = '';
  genders = ['male', 'female'];

  requiredForm: FormGroup;

  html: string = '<ng-template appHTML> </ng-template>';
  constructor(private formBuilder: FormBuilder) {

  }

  ngOnInit() {
    // this.buildRequiredForm();
  }
  suggestUsername() {
    this.signUpForm.form.patchValue({
      // username: 'nandha',
      email: 'nandharagav@gmail.com',
      question: 'pet',
      answer: '',
      gender: 'male'
    });
  }
  onSubmit(form: FormGroup): void {
    // 
    console.log(form.value);
    const value  = form.value;
    value.addresline1 = "";
    
  }

  // myValidator(): ValidatorFn {
  //   return (control: AbstractControl): ValidationErrors | null => {
  //     return this.isEmptyInputValue(control.value) ? { 'required': true } : null;
  //   };
  // }

  // isEmptyInputValue(value: any): boolean {
  //   value = value && value.trim();
  //   // we don't check for string here so it also works with arrays
  //   return value == null || value.length === 0;
  // }


  // buildRequiredForm(): void {
  //   this.requiredForm = this.formBuilder.group({
  //     name: ['', Validators.required]
  //   });
  // }


}
