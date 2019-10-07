import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitsComponent } from './units.component';
import { SharedModule } from '../../shared.module';
import { PropertyService } from '../properties/propertyService/property.service';
import {RouterTestingModule} from "@angular/router/testing";
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('UnitsComponent', () => {
  let component: UnitsComponent;
  let fixture: ComponentFixture<UnitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule, RouterTestingModule, HttpClientTestingModule, BrowserAnimationsModule],
      declarations: [ UnitsComponent],
      providers: [PropertyService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
