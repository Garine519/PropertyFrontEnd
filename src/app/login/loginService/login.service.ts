import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

export interface User {
  email: string;
  password: string;
  token?: string,
  _id: number;
}

@Injectable()
export class LoginService {

  authenticationState = new BehaviorSubject(false);

  constructor(private http: HttpClient) {
    this.checkToken();
   }


  checkToken() {
    const user = localStorage.getItem('user');
      if (JSON.parse(user)) {
        this.authenticationState.next(true);
      }
  }

  login(email: string, password: string): Observable<any> {
    return this.http.post<any>(`${environment.BASE_API_PATH}/api/login`, { 'email': email, 'password': password })
      .pipe(map(data => {
        // login successful if there's a user in the response
        if (data.user) {
          // store user details and basic auth credentials in local storage 
          // to keep user logged in between page refreshes
          this.setUserInStorage(data.user);
          this.authenticationState.next(true);
        }
        return data.user;
      }));
  }

  logout() {
    // remove user from local storage to log user out
    this.removeUserInStorage();
    this.authenticationState.next(false);
  }

  setUserInStorage(user: User) {
    localStorage.setItem('user', JSON.stringify(user));
  }

  removeUserInStorage() {
    localStorage.removeItem('user');
  }

  isAuthenticated() {
    return this.authenticationState.value;
  }
}