
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';
import { loginData } from 'src/app/login/login-data';
import { AuthenticationService } from 'src/app/service/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName: string;
  password: string;
  returnUrl: string;
  loginData: any[];
  invalidCredentials = false;

  constructor(private authService: AuthenticationService, private route: ActivatedRoute, private router: Router) {
    this.userName = '';
    this.password = '';
    this.invalidCredentials = false;
    if (this.authService.currentUserValue) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit() {
    this.loginData = loginData;
    // get return url from route parameters or default to '/'
  }
  // convenience getter for easy access to form fields
  onSubmit() {
    const login = this.authService.login(this.userName, this.password);
    if (login) {
      this.router.navigate(['ProjectStatus']);
    } else {
      this.invalidCredentials = true;
    }
  }
}


