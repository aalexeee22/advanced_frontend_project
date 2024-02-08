import { Observable, of, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private token: string | null = null;
  isLogged: boolean = false;
  constructor(private router: Router) {}

  setToken(token: string): void {
    this.token = token;
  }

  getToken(): string | null {
    return this.token;
  }

  isLoggedIn() {
    return this.token !== null;
  }

  logout() {
    this.token = null;
    this.router.navigate(['login']);
  }

  login({ email, password }: any): Observable<any> {

    if (email === 'admin@gmail.com' && password === 'admin123') {
      this.setToken('abcdefghijklmnopqrstuvwxyz');
      this.isLogged=true;
      return of({ email: 'admin@gmail.com' });
      
    }
    return throwError(new Error('Failed to login'));
  }
}