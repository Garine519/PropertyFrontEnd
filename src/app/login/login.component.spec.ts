import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { SharedModule } from '../shared.module';
import { LoginService, User } from './loginService/login.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Location } from "@angular/common";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthGuard } from '../Guards/auth.guard';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let location: Location;
  let loginService: LoginService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[SharedModule, HttpClientTestingModule, RouterTestingModule, BrowserAnimationsModule],
      declarations: [ LoginComponent ],
      providers: [LoginService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form invalid when empty', () => {
    expect(component.userForm.valid).toBeFalsy();
  });

  it('submitting a form emits a user and redirect to properties page', () => {
    loginService = TestBed.get(LoginService);

    expect(component.userForm.valid).toBeFalsy();
    component.userForm.controls['email'].setValue("test@test.com");
    component.userForm.controls['password'].setValue("testtest");
    expect(component.userForm.valid).toBeTruthy();

    let user: User;

    component.login();

    // Subscribe to the Observable and store the user in a local variable.
    component.loggedIn.subscribe((value: User) => {
      user = value;
      expect(user.email).toBe("test@test.com");
      expect(user.password).toBe("testtest");
      expect(loginService.authenticationState.value).toBe(true);
      expect(location.path()).toBe('/client/properties');

    });

  });
});
