import { Injectable } from '@angular/core';
import { ResultLogin } from '../types/result.type';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
  get token(): string | null {
    return sessionStorage.getItem('token');
  }
  get role(): string | null {
    return sessionStorage.getItem('role');
  }

  get isAuth(): boolean {
    return Boolean(this.token && this.role);
  }

  constructor(private router: Router) {}

  public auth(data: ResultLogin) {
    sessionStorage.setItem('token', data.token);
    sessionStorage.setItem('role', data.role);
    this.router.navigate(['main']);
  }

  public logout() {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('role');
    this.router.navigate(['login']);
  }
}
