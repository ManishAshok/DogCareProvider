import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserlinksComponent } from './userlinks.component';

describe('UserlinksComponent', () => {
  let component: UserlinksComponent;
  let fixture: ComponentFixture<UserlinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserlinksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserlinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
