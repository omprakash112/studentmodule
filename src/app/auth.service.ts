import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  sendToken(value) {
    localStorage.setItem('user', value);
  }
  sendToken1(value) {
    localStorage.setItem('pass', value);
  }

  logout() {
    localStorage.removeItem('user');
    localStorage.removeItem('pass');
  }

}
