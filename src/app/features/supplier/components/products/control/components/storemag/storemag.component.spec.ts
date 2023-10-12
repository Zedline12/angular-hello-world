import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoremagComponent } from './storemag.component';

describe('StoremagComponent', () => {
  let component: StoremagComponent;
  let fixture: ComponentFixture<StoremagComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StoremagComponent]
    });
    fixture = TestBed.createComponent(StoremagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
