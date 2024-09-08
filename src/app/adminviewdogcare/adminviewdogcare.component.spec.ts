import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminviewdogcareComponent } from './adminviewdogcare.component';

describe('AdminviewdogcareComponent', () => {
  let component: AdminviewdogcareComponent;
  let fixture: ComponentFixture<AdminviewdogcareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminviewdogcareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminviewdogcareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
