import { Injectable, EventEmitter, Output } from '@angular/core';
import { loginData } from 'src/app/login/login-data';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  @Output() getLoggedInUser: EventEmitter<any> = new EventEmitter();
  currentUser: any = null;
  constructor() { }

  public get currentUserValue(): any {
    return JSON.parse(localStorage.getItem('currentUser'));
  }

  login(userName: string, password: string): boolean {
    console.log('login method reached..');
    const validUser = loginData.find(i => i.userName === userName && i.password === password);
    if (validUser) {
      console.log(validUser);
      localStorage.setItem('currentUser', JSON.stringify(validUser) ) ;
      this.getLoggedInUser.emit(validUser);
      return true;
    }
    return false;
  }
  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.currentUser = null;
    this.getLoggedInUser.emit(null);
  }
}
