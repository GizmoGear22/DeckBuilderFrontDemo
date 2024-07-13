import { TestBed } from '@angular/core/testing';

import { GetCardsByTypeService } from './get-cards-by-type.service';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

describe('GetCardsByTypeService', () => {
  let service: GetCardsByTypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers:[GetCardsByTypeService, provideHttpClient(), provideHttpClientTesting()]
    });
    service = TestBed.inject(GetCardsByTypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
