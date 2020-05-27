import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, NgForm, ValidatorFn, Validators, AbstractControl, ValidationErrors, FormControl } from '@angular/forms';
import { MustMatch } from '../validators/app.validators';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.less']
})
export class ReactiveFormsComponent implements OnInit {
  langs: string[] = [
    'English',
    'French',
    'German',
  ]
  myForm: FormGroup;
  constructor(private fb: FormBuilder) {

  }

  ngOnInit() {
    // this.buildForm();
    this.buildFormByFormBuilder();
  }

  buildForm(): void {
    this.myForm = new FormGroup({
      name: new FormGroup({
        firstName: new FormControl('', Validators.required),
        lastName: new FormControl('', Validators.required),
      }),
      email: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)]),
      password: new FormControl('', Validators.required),
      confirmPassword: new FormControl(''),
      language: new FormControl('')
    });
  }

  buildFormByFormBuilder(): void {
    this.myForm = this.fb.group({
      name: this.fb.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
      }),
      email: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)]],
      password: ['', Validators.required],
      confirmPassword: ['',],
      language: ['']
    }, {
      validators: [MustMatch('password', 'confirmPassword')]
    });

  }

  onSubmit(): void {
    // Check form is valid
    if (this.myForm.valid) {
      // Sending Request
      console.log(this.myForm.value);
    }
  }
  resetForm(): void {
    this.myForm.reset();
  }

} 
