import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerselecteddogCareComponent } from './customerselecteddog-care.component';

describe('CustomerselecteddogCareComponent', () => {
  let component: CustomerselecteddogCareComponent;
  let fixture: ComponentFixture<CustomerselecteddogCareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerselecteddogCareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerselecteddogCareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
