import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonlinksComponent } from './commonlinks.component';

describe('CommonlinksComponent', () => {
  let component: CommonlinksComponent;
  let fixture: ComponentFixture<CommonlinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommonlinksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonlinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
