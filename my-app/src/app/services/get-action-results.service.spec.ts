import { TestBed } from '@angular/core/testing';

import { GetActionResultsService } from './get-action-results.service';

describe('GetActionResultsService', () => {
  let service: GetActionResultsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetActionResultsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
