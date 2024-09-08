import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserviewselectedComponent } from './userviewselected.component';

describe('UserviewselectedComponent', () => {
  let component: UserviewselectedComponent;
  let fixture: ComponentFixture<UserviewselectedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserviewselectedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserviewselectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
