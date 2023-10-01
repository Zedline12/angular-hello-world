import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToysecComponent } from './toysec.component';

describe('ToysecComponent', () => {
  let component: ToysecComponent;
  let fixture: ComponentFixture<ToysecComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ToysecComponent]
    });
    fixture = TestBed.createComponent(ToysecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
