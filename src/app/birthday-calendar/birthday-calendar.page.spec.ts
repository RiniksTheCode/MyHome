import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BirthdayCalendarPage } from './birthday-calendar.page';

describe('BirthdayCalendarPage', () => {
  let component: BirthdayCalendarPage;
  let fixture: ComponentFixture<BirthdayCalendarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BirthdayCalendarPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BirthdayCalendarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
