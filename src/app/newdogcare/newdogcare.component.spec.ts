import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewdogcareComponent } from './newdogcare.component';

describe('NewdogcareComponent', () => {
  let component: NewdogcareComponent;
  let fixture: ComponentFixture<NewdogcareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewdogcareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewdogcareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
