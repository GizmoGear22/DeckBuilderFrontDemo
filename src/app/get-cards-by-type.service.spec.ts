import { TestBed } from '@angular/core/testing';

import { GetCardsByTypeService } from './get-cards-by-type.service';

describe('GetCardsByTypeService', () => {
  let service: GetCardsByTypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetCardsByTypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
