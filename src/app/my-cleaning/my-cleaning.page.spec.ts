import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCleaningPage } from './my-cleaning.page';

describe('MyCleaningPage', () => {
  let component: MyCleaningPage;
  let fixture: ComponentFixture<MyCleaningPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyCleaningPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyCleaningPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
