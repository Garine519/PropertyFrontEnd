import { Component, OnInit, Input } from '@angular/core';
import { LoginService } from '../login/loginService/login.service';
import { Router } from '@angular/router';
import { MatButton, MatMenuTrigger } from '@angular/material';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  email: string = 'User';

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() {
    const user = JSON.parse(localStorage.getItem('user'));
    this.email = user ? user.email : this.email;
  }

  logout(){
    this.loginService.logout();
    this.router.navigate(['/login']);
  }

}
