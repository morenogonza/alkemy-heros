import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { AuthResponse } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl = environment.loginUrl;

  constructor(private http: HttpClient) {}

  login(email: string, password: string) {
    const url = this.baseUrl;
    const body = { email, password };

    return this.http.post<AuthResponse>(url, body).pipe(
      tap((resp) => {
        if (!resp.error) {
          localStorage.setItem('token', resp.token!);
        }
      })
    );
  }

  logout() {
    localStorage.removeItem('token');
  }
}
