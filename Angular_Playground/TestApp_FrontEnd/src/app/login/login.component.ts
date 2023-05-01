import { Component } from '@angular/core';
import './login.component.scss';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {

  constructor(private authService: AuthService) { }
  username = '';
  password = '';

  onSubmit() {
    this.authService.login(this.username, this.password).subscribe(
      response => {
        // Handle successful login
        console.log('Login successful:', response);
      },
      error => {
        // Handle login error
        console.log('Login error:', error);
      }
    );
  }
}






