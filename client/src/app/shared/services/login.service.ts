import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


@Injectable()
export class LoginService {

    constructor(
        private router: Router
    ) { }
    login(loginData, token) {
        localStorage.setItem('user', JSON.stringify(loginData));
        localStorage.setItem('auth', token);

    }
    logout() {
        localStorage.clear();
        this.router.navigate(['/home']);
    }
}
