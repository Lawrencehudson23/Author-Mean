import { Router } from '@angular/router';
import { HttpService } from './../http.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginUser = {
    email: '',
    password: '',
  };
  registerUser = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  };
  constructor(private _httpService: HttpService, private _router: Router) {}

  ngOnInit(): void {}

  handleLogin() {
    this._httpService.loginUser(this.loginUser).subscribe((data: any) => {
      if (data.status === 'success') {
        this._router.navigate(['/']);
      } else {
        //error handling
      }
    });
  }
  handleRegister() {
    this._httpService.registerUser(this.registerUser).subscribe((data: any) => {
      if (data.user) {
        this._router.navigate(['/']);
      } else {
        //error handling
      }
    });
  }
}
