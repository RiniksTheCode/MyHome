import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyBillsPage } from './my-bills.page';

describe('MyBillsPage', () => {
  let component: MyBillsPage;
  let fixture: ComponentFixture<MyBillsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyBillsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyBillsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
