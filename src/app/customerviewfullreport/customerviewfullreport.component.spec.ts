import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerviewfullreportComponent } from './customerviewfullreport.component';

describe('CustomerviewfullreportComponent', () => {
  let component: CustomerviewfullreportComponent;
  let fixture: ComponentFixture<CustomerviewfullreportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerviewfullreportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerviewfullreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
