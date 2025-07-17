import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule, CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  username: string = '';
  password: string = '';
  loginError: boolean = false;

  constructor(private router: Router) {}
  login() {
    if (this.username === 'admin' && this.password === 'admin123') {
      this.router.navigateByUrl('/admin/dashboard');
    } else if (this.username === 'zeel' && this.password === 'zeel2121') {
      this.router.navigateByUrl('/user/dashboard');
    } else {
      this.loginError = true;
    }
  }
}
