import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FetsectionComponent } from './fetsection.component';

describe('FetsectionComponent', () => {
  let component: FetsectionComponent;
  let fixture: ComponentFixture<FetsectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FetsectionComponent]
    });
    fixture = TestBed.createComponent(FetsectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
