import { TestBed } from '@angular/core/testing';

import { ApiconecttestService } from './apiconecttest.service';

describe('ApiconecttestService', () => {
  let service: ApiconecttestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiconecttestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
