import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsortingComponent } from './productsorting.component';

describe('ProductsortingComponent', () => {
  let component: ProductsortingComponent;
  let fixture: ComponentFixture<ProductsortingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsortingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsortingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
