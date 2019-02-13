import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyMettingPage } from './my-metting.page';

describe('MyMettingPage', () => {
  let component: MyMettingPage;
  let fixture: ComponentFixture<MyMettingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyMettingPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyMettingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
