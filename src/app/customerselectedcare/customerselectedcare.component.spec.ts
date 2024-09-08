import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerselectedcareComponent } from './customerselectedcare.component';

describe('CustomerselectedcareComponent', () => {
  let component: CustomerselectedcareComponent;
  let fixture: ComponentFixture<CustomerselectedcareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerselectedcareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerselectedcareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
