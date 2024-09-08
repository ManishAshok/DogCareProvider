import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerviewcentersComponent } from './customerviewcenters.component';

describe('CustomerviewcentersComponent', () => {
  let component: CustomerviewcentersComponent;
  let fixture: ComponentFixture<CustomerviewcentersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerviewcentersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerviewcentersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
