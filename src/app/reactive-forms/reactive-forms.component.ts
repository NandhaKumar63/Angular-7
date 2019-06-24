import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, NgForm } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.less']
})
export class ReactiveFormsComponent implements OnInit {

  @ViewChild('form') form: NgForm;
  defaultQuestion = 'mobile';
  answer = '';
  genders = ['male', 'female']
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {

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


  onSubmit(): void {
    // 
    console.log(this.form);
  }

}
