import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrcardComponent } from './prcard.component';

describe('PrcardComponent', () => {
  let component: PrcardComponent;
  let fixture: ComponentFixture<PrcardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrcardComponent]
    });
    fixture = TestBed.createComponent(PrcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
