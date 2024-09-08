import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerviewtransactionsComponent } from './customerviewtransactions.component';

describe('CustomerviewtransactionsComponent', () => {
  let component: CustomerviewtransactionsComponent;
  let fixture: ComponentFixture<CustomerviewtransactionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerviewtransactionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerviewtransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
