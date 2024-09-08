import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminviewtransactionsComponent } from './adminviewtransactions.component';

describe('AdminviewtransactionsComponent', () => {
  let component: AdminviewtransactionsComponent;
  let fixture: ComponentFixture<AdminviewtransactionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminviewtransactionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminviewtransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
