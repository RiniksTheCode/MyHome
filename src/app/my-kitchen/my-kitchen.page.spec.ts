import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyKitchenPage } from './my-kitchen.page';

describe('MyKitchenPage', () => {
  let component: MyKitchenPage;
  let fixture: ComponentFixture<MyKitchenPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyKitchenPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyKitchenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
