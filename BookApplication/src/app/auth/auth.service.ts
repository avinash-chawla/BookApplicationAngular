import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Auth } from './auth.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiURL = 'http://localhost:5000/api/user';

  constructor(private http: HttpClient) {}

  CreateUser(user: Auth) {
    return this.http.post(this.apiURL + '/register', user);
  }

  loginUser(email: string, password: string) {
    const user = { email, password };
    return this.http.post(this.apiURL + '/login', user);
  }
}
