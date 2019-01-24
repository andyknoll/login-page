import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgot-pw',
  templateUrl: './forgot-pw.component.html',
  styleUrls: ['./forgot-pw.component.css']
})
export class ForgotPwComponent implements OnInit {

  // FormBuilder technique
  resetPWFormGroup = this.fb.group({
    emailInput: ['',  Validators.email]
  });

  // inject FormBuilder into constructor
  constructor(private fb: FormBuilder) { }

  ngOnInit() {}

  onSubmit() {
    console.log('Email has been sent');
    alert('Email has been sent');
  }


}
