import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CareviewtransactionsComponent } from './careviewtransactions.component';

describe('CareviewtransactionsComponent', () => {
  let component: CareviewtransactionsComponent;
  let fixture: ComponentFixture<CareviewtransactionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CareviewtransactionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CareviewtransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
