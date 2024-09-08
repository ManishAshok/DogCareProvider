import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentsuccesspageComponent } from './paymentsuccesspage.component';

describe('PaymentsuccesspageComponent', () => {
  let component: PaymentsuccesspageComponent;
  let fixture: ComponentFixture<PaymentsuccesspageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentsuccesspageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentsuccesspageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
