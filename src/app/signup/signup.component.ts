import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  // inject FormBuilder into constructor
  constructor(private fb: FormBuilder, private router: Router) { }

  get usernameControl() { return this.signupForm.get('usernameInput'); }
  get emailControl() { return this.signupForm.get('emailInput'); }
  get passwordControl() { return this.signupForm.get('passwordInput'); }

  // FormBuilder technique
  signupForm = this.fb.group({
    usernameInput: ['',  Validators.required],
    emailInput:    ['',  Validators.email],
    passwordInput: ['', [Validators.required, Validators.minLength(4)]]   // both as second arg
  });

  onSignup() {
    // alert("ROUTING TO DASHBOARD");
    this.router.navigate(['/dashboard']);
  }

}
