import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  get usernameControl() { return this.signupForm.get('usernameInput'); }
  get emailControl() { return this.signupForm.get('emailInput'); }
  get passwordControl() { return this.signupForm.get('passwordInput'); }

  // FormBuilder technique
  signupForm = this.fb.group({
    usernameInput: ['',  Validators.required],
    emailInput:    ['',  Validators.email],
    passwordInput: ['', [Validators.required, Validators.minLength(4)]]   // both as second arg
  });

  // inject FormBuilder into constructor
  constructor(private fb: FormBuilder) { }

  onSignup() {
    //alert("ROUTING TO DASHBOARD");
    //this.router.navigateByUrl("/dashboard");
  }

}
