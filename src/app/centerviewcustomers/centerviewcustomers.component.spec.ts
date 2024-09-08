import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CenterviewcustomersComponent } from './centerviewcustomers.component';

describe('CenterviewcustomersComponent', () => {
  let component: CenterviewcustomersComponent;
  let fixture: ComponentFixture<CenterviewcustomersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CenterviewcustomersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CenterviewcustomersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
