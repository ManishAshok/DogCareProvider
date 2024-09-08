import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminviewfullreportComponent } from './adminviewfullreport.component';

describe('AdminviewfullreportComponent', () => {
  let component: AdminviewfullreportComponent;
  let fixture: ComponentFixture<AdminviewfullreportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminviewfullreportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminviewfullreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
