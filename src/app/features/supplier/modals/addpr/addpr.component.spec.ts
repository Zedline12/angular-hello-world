import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddprComponent } from './addpr.component';

describe('AddprComponent', () => {
  let component: AddprComponent;
  let fixture: ComponentFixture<AddprComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddprComponent]
    });
    fixture = TestBed.createComponent(AddprComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
