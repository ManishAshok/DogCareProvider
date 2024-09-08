import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminviewselectedComponent } from './adminviewselected.component';

describe('AdminviewselectedComponent', () => {
  let component: AdminviewselectedComponent;
  let fixture: ComponentFixture<AdminviewselectedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminviewselectedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminviewselectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
