import { Component } from '@angular/core';
import { AuthenticationService } from './service/authentication.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: ['h1 {color: rgb(12, 12, 119);}']

})
export class AppComponent {
  currentUser: any;
  constructor(private authServie: AuthenticationService, private route: ActivatedRoute, private router: Router) {
     console.log('app cmpt ctor reached..');
     this.currentUser = this.authServie.currentUserValue;
     this.authServie.getLoggedInUser.subscribe(user => this.setUser(user));
     console.log(this.currentUser);
  }
  pageTitle = 'USB Projects Status!!!';

  setUser(user: any) {
    this.currentUser = user;
  }
  logout() {
    this.authServie.logout();
    this.router.navigate(['login']);
  }
}
