import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerviewselectedComponent } from './customerviewselected.component';

describe('CustomerviewselectedComponent', () => {
  let component: CustomerviewselectedComponent;
  let fixture: ComponentFixture<CustomerviewselectedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerviewselectedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerviewselectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
