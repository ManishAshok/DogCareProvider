import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CareviewfullreportComponent } from './careviewfullreport.component';

describe('CareviewfullreportComponent', () => {
  let component: CareviewfullreportComponent;
  let fixture: ComponentFixture<CareviewfullreportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CareviewfullreportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CareviewfullreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
