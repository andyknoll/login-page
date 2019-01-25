// login.component.ts
// demonstrating Angular Forms, FormControls
// also FormBuilder and Validators


import { Component, OnInit } from '@angular/core';
// import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // FormBuilder technique
  loginFormGroup = this.fb.group({
    usernameInput: ['',  Validators.required],
    passwordInput: ['', [Validators.required, Validators.minLength(4)]]   // both as second arg
  });

  get usernameControl() { return this.loginFormGroup.get('usernameInput'); }
  get passwordControl() { return this.loginFormGroup.get('passwordInput'); }

  // inject FormBuilder into constructor
  constructor(private fb: FormBuilder,
              private router: Router,
              private authService: AuthService) { }

  ngOnInit() {
    // this.usernameControl.setValue('andy');
    // this.passwordControl.setValue('1234');
    if (this.authService.isLoggedIn()) {
      //alert('ALREADY LOGGED IN');
      this.router.navigate(['/dashboard']);
    } else {
      //alert('NOT LOGGED IN');
    }
  }

  isLoginOK() {
    return ((this.usernameControl.value === 'Tuna') &&
            (this.passwordControl.value === 'Fish'));
  }

  onSubmit() {
    if (this.isLoginOK()) {
      console.log('Success');
      this.router.navigate(['/dashboard']);
    } else {
      console.log('Error');
    }
  }

}
