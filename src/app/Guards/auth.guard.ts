import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { LoginService} from "../login/loginService/login.service"

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(public auth: LoginService) { }

  canActivate(): boolean {
    return this.auth.isAuthenticated();
  }
}