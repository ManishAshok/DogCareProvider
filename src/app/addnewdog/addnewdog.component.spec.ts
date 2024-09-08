import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddnewdogComponent } from './addnewdog.component';

describe('AddnewdogComponent', () => {
  let component: AddnewdogComponent;
  let fixture: ComponentFixture<AddnewdogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddnewdogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddnewdogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
