import { async, ComponentFixture, TestBed, fakeAsync, tick, flush } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ClientComponent } from './client.component';
import { SharedModule } from '../shared.module';
import { LoginService } from '../login/loginService/login.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('ClientComponent', () => {
  let component: ClientComponent;
  let fixture: ComponentFixture<ClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule, RouterTestingModule, HttpClientTestingModule, BrowserAnimationsModule],
      declarations: [ClientComponent],
      providers: [LoginService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should Logout and trigger logout click', fakeAsync(() => {
    const compiledDom = fixture.debugElement.nativeElement;
    compiledDom.querySelector('button').click();
    spyOn(component, "logout"); //method attached to the click.
    fixture.detectChanges();
    let button = fixture.debugElement.query(By.css('.menu-item-logout'));
    expect(button).toBeTruthy();
    button.nativeElement.click();
    tick(); // simulates the passage of time until all pending asynchronous activities finish
    fixture.detectChanges();
    expect(component.logout).toHaveBeenCalled();
    fixture.destroy();
    flush();
  }));

});
