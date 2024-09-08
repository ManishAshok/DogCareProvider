import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerviewdogComponent } from './customerviewdog.component';

describe('CustomerviewdogComponent', () => {
  let component: CustomerviewdogComponent;
  let fixture: ComponentFixture<CustomerviewdogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerviewdogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerviewdogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
