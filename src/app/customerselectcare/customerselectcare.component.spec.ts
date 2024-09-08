import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerselectcareComponent } from './customerselectcare.component';

describe('CustomerselectcareComponent', () => {
  let component: CustomerselectcareComponent;
  let fixture: ComponentFixture<CustomerselectcareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerselectcareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerselectcareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
