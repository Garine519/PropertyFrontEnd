import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs/Observable';

export interface User {
  email: string;
  password: string;
  token?: string,
  _id: number;
}

@Injectable()
export class LoginService {
  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<any> {
    return this.http.post<any>(`${environment.BASE_API_PATH}/api/login`, { 'email': email, 'password': password })
      .pipe(map(data => {
        // login successful if there's a user in the response
        if (data.user) {
          // store user details and basic auth credentials in local storage 
          // to keep user logged in between page refreshes
          this.setUserInStorage(data.user);
        }
        return data.user;
      }));
  }

  logout() {
    // remove user from local storage to log user out
    this.removeUserInStorage();
  }

  private setUserInStorage(user: User) {
    localStorage.setItem('user', JSON.stringify(user));
  }

  private removeUserInStorage() {
    localStorage.removeItem('user');
  }
}