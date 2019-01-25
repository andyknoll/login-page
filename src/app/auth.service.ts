import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  isLoggedIn() {
    const loggedIn = true;
    // alert('checking AuthService.isLoggedIn: ' + loggedIn);
    return loggedIn;
  }

}
