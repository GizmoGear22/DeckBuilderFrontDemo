import { TestBed } from '@angular/core/testing';

import { GetCardByIdService } from './get-card-by-id.service';

describe('GetCardByIdService', () => {
  let service: GetCardByIdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetCardByIdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
