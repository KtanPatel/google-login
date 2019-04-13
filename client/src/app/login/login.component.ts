import { Component, OnInit } from '@angular/core';
import { CrudService } from '../shared/services/crud.service';
import { AuthService, SocialUser } from 'angularx-social-login';
import { GoogleLoginProvider } from 'angularx-social-login';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public auth: any;
  private user: SocialUser;
  private loggedIn: boolean;

  constructor(private service: CrudService, private authService: AuthService, private router: Router) {

  }
  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
      if (this.loggedIn) {
        // this.router.navigate(['']);
      }
    });
  }

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then(res => {
      console.log('login res => ', res);
      this.ApiCallback('google_login', res);
    }
    ).catch(err => {
      console.log('login err => ', err);
    });
  }

  signOut(): void {
    this.authService.signOut();
    localStorage.clear();
  }

  ApiCallback(api_url, userData) {
    this.service.post(api_url, userData).subscribe((res: any) => {
      console.log('res:', res);
      localStorage.setItem('token', res.token);
      // this.isFormSubmited = false;
      // this.formData = {};
      // this.alerts.push({ type: 'success', msg: res['message'], 'timeout': 5000 })
      // this.loginService.login(res['result'], res['token']);
      // this.zone.run(() => {
      //   if (this.spiriservice) {
      //     this.router.navigate(['/service_detail', this.spiriservice]);
      //   } else {
      //     this.router.navigate(['/home']);
      //   }
      // });
    }, (err) => {
      // err = err;
      console.log('err:', err);
      // this.alerts.push({ type: 'danger', msg: err['message'], 'timeout': 5000 })
    });
  }
}
