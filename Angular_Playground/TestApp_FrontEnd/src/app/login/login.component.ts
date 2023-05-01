import { Component } from '@angular/core';
import './login.component.scss';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  username = '';
  password = '';

  onSubmit() {
    console.log('Username:', this.username);
    console.log('Password:', this.password);
    // Call your authentication service here to authenticate the user.
  }
}

