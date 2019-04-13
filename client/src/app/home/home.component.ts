import { Component, OnInit } from '@angular/core';
import { AuthService } from 'angularx-social-login';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  loggedIn: boolean;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      // this.user = user;
      this.loggedIn = (user != null);
    });
  }

  signOut(): void {
    this.authService.signOut();
    localStorage.clear();
  }

}
