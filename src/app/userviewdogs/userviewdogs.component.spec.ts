import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserviewdogsComponent } from './userviewdogs.component';

describe('UserviewdogsComponent', () => {
  let component: UserviewdogsComponent;
  let fixture: ComponentFixture<UserviewdogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserviewdogsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserviewdogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
