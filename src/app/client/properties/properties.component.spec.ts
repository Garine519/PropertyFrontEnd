import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PropertiesComponent, PropertyDialogComponent } from './properties.component';
import { SharedModule } from '../../shared.module';
import { UnitsComponent } from '../units/units.component';
import { PropertyService } from './propertyService/property.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('PropertiesComponent', () => {
  let component: PropertiesComponent;
  let fixture: ComponentFixture<PropertiesComponent>;

  beforeEach((() => {
    TestBed.configureTestingModule({
      imports: [SharedModule, HttpClientTestingModule, RouterTestingModule],
      declarations: [PropertiesComponent, UnitsComponent, PropertyDialogComponent ],
      providers: [PropertyService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
