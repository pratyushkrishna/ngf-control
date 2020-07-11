import { TestBed } from '@angular/core/testing';

import { NgfGridService } from './ngf-grid.service';

describe('NgfGridService', () => {
  let service: NgfGridService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgfGridService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
