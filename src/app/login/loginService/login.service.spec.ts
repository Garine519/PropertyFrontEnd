import { TestBed, inject } from '@angular/core/testing';
import { LoginService } from './login.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('LoginService', () => {

  let httpMock: HttpTestingController;
  let loginService: LoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [LoginService]
    });

    loginService = TestBed.get(LoginService);
    httpMock = TestBed.get(HttpTestingController);

    // Mock Storage
    let store = {};
    const mockLocalStorage = {
      getItem: (key: string): string => {
        return key in store ? store[key] : null;
      },
      setItem: (key: string, value: string) => {
        store[key] = `${value}`;
      },
      removeItem: (key: string) => {
        delete store[key];
      },
    };
    spyOn(localStorage, 'getItem').and.callFake(mockLocalStorage.getItem);
    spyOn(localStorage, 'setItem').and.callFake(mockLocalStorage.setItem);
    spyOn(localStorage, 'removeItem').and.callFake(mockLocalStorage.removeItem);
  });



  it('should be created', inject([LoginService], (service: LoginService) => {
    expect(service).toBeTruthy();
  }));

  it('should call http post with correct path when Login', (done) => {
    loginService.login('test@test.com', 'testtest')
      .subscribe((resp) => {
        loginService.setUserInStorage({email:"test@test.com",password:"testtest", token: "jwtToken", _id: 12});
        expect(localStorage.getItem('user')).not.toEqual(null);
        done();
      });

    const req = httpMock.expectOne((request) => {
      return request.method === 'POST' &&
        JSON.stringify(request.body) === '{"email":"test@test.com","password":"testtest"}' &&
        request.url === 'http://localhost:3000/api/login';
    });


    req.flush([]);

    httpMock.verify();
  });

  it('should logout and clear storage', () => {
    loginService.logout();
    expect(localStorage.getItem('user')).toEqual(null);
  });
});