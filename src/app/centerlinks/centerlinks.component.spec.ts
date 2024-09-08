import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CenterlinksComponent } from './centerlinks.component';

describe('CenterlinksComponent', () => {
  let component: CenterlinksComponent;
  let fixture: ComponentFixture<CenterlinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CenterlinksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CenterlinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
