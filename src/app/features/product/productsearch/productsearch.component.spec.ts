import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsearchComponent } from './productsearch.component';

describe('ProductsearchComponent', () => {
  let component: ProductsearchComponent;
  let fixture: ComponentFixture<ProductsearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductsearchComponent]
    });
    fixture = TestBed.createComponent(ProductsearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
