import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyShoppingPage } from './my-shopping.page';

describe('MyShoppingPage', () => {
  let component: MyShoppingPage;
  let fixture: ComponentFixture<MyShoppingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyShoppingPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyShoppingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
