import { TestBed } from '@angular/core/testing';

import { NgfMultiSelectService } from './ngf-multi-select.service';

describe('NgfMultiSelectService', () => {
  let service: NgfMultiSelectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgfMultiSelectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
