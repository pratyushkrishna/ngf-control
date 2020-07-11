import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgfMultiSelectComponent } from './ngf-multi-select.component';

describe('NgfMultiSelectComponent', () => {
  let component: NgfMultiSelectComponent;
  let fixture: ComponentFixture<NgfMultiSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgfMultiSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgfMultiSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
