import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginUser {
  id: string;
  name: string;
  email: string;
  role: 'user' | 'admin';
}

export interface LoginResponse {
  success: boolean;
  message: string;
  data: {
    token: string;
    user: LoginUser;
  };
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private http = inject(HttpClient);

  private apiUrl = 'http://localhost:3000/api/auth';

  login(credentials: LoginRequest): Observable<LoginResponse> {

    return this.http
      .post<LoginResponse>(
        `${this.apiUrl}/login`,
        credentials
      )
      .pipe(
        tap(response => {

          if (response.success) {

            localStorage.setItem(
              'accessToken',
              response.data.token
            );

            localStorage.setItem(
              'currentUser',
              JSON.stringify(response.data.user)
            );

          }

        })
      );
  }

  logout(): void {

    localStorage.removeItem('accessToken');
    localStorage.removeItem('currentUser');

  }

  getToken(): string | null {

    return localStorage.getItem('accessToken');

  }

  getCurrentUser(): LoginUser | null {

    const user = localStorage.getItem('currentUser');

    return user ? JSON.parse(user) : null;

  }

  isLoggedIn(): boolean {

    return !!this.getToken();

  }
}