import { TestBed } from '@angular/core/testing';

import { TestExampleService } from './test-example.service';

describe('TestExampleService', () => {
  let service: TestExampleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestExampleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
