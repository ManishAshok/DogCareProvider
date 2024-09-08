import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserviewcarecentersComponent } from './userviewcarecenters.component';

describe('UserviewcarecentersComponent', () => {
  let component: UserviewcarecentersComponent;
  let fixture: ComponentFixture<UserviewcarecentersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserviewcarecentersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserviewcarecentersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
