import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginService, User } from './loginService/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  @Output() loggedIn = new EventEmitter<User>();
  userForm: FormGroup;
  formErrors = {
    'email': '',
    'password': ''
  };
  validationMessages = {
    'email': {
      'required': 'Email',
      'email': 'please enter your vaild email'
    },
    'password': {
      'required': 'Password',
      'pattern': 'The password must contain numbers and letters',
      'minlength': 'Please enter more than 4 characters',
      'maxlength': 'Please enter less than 25 characters',
    }
  };

  constructor(private router: Router, private fb: FormBuilder, private loginService: LoginService) {
  }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.userForm = this.fb.group({
      'email': ['', [
        Validators.required,
        Validators.email
      ]
      ],
      'password': ['', [
        Validators.minLength(6),
        Validators.maxLength(25)
      ]
      ],
    });
  }
  login() {
    if (this.userForm.valid) {
      this.loginService.login(this.userForm.value.email, this.userForm.value.password).subscribe((user: any) => {
        if (user.email){
          this.router.navigate(['client/properties']);
        }
      })
    }
  }
}