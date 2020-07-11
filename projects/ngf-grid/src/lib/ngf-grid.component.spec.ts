import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgfGridComponent } from './ngf-grid.component';

describe('NgfGridComponent', () => {
  let component: NgfGridComponent;
  let fixture: ComponentFixture<NgfGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgfGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgfGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
