import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private authService: AuthService) { }

  username = '';
  password = '';

  onSubmit() {
    this.authService.login(this.username, this.password).subscribe(
      response => {
        console.log('Login successful:', response);
      },
      error => {
        console.log('Login error:', error);
      }
    );
  }
}






