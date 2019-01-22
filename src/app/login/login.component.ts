// login.component.ts
//
// demonstrating Angular Forms, FormControls
// also FormBuilder and Validators


import { Component, OnInit } from '@angular/core';
// import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  get usernameControl() { return this.loginFormGroup.get('usernameInput'); }
  get passwordControl() { return this.loginFormGroup.get('passwordInput'); }

  /*
  // first technique - no FormBuilder
  loginFormGroup = new FormGroup({
    usernameInput: new FormControl(''),
    passwordInput: new FormControl('')
  });
  */

  // FormBuilder technique
  loginFormGroup = this.fb.group({
    usernameInput: ['',  Validators.required],
    passwordInput: ['', [Validators.required, Validators.minLength(4)]]   // both as second arg
  });

  // inject FormBuilder into constructor
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    //this.usernameControl.setValue('andy');    
    //this.passwordControl.setValue('1234');    
  }

  onSubmit() {
    //console.log(this.loginFormGroup.value);                   // the FormGroup
    //alert(this.loginFormGroup.get("usernameInput").value);    // the control

    alert(this.usernameControl.value + "\n" + this.passwordControl.value);
  }  

}
