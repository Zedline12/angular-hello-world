import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelctproductComponent } from './selctproduct.component';

describe('SelctproductComponent', () => {
  let component: SelctproductComponent;
  let fixture: ComponentFixture<SelctproductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelctproductComponent]
    });
    fixture = TestBed.createComponent(SelctproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
