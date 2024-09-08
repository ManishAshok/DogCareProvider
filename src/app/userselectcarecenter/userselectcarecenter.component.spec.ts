import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserselectcarecenterComponent } from './userselectcarecenter.component';

describe('UserselectcarecenterComponent', () => {
  let component: UserselectcarecenterComponent;
  let fixture: ComponentFixture<UserselectcarecenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserselectcarecenterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserselectcarecenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
