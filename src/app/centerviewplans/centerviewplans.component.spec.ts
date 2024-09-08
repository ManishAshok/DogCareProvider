import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CenterviewplansComponent } from './centerviewplans.component';

describe('CenterviewplansComponent', () => {
  let component: CenterviewplansComponent;
  let fixture: ComponentFixture<CenterviewplansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CenterviewplansComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CenterviewplansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
