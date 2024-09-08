import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CenteraddplanComponent } from './centeraddplan.component';

describe('CenteraddplanComponent', () => {
  let component: CenteraddplanComponent;
  let fixture: ComponentFixture<CenteraddplanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CenteraddplanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CenteraddplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
