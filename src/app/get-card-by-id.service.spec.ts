import { TestBed } from '@angular/core/testing';

import { GetCardByIdService } from './get-card-by-id.service';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

describe('GetCardByIdService', () => {
  let service: GetCardByIdService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers:[provideHttpClient(), provideHttpClientTesting(), GetCardByIdService]
    });
    service = TestBed.inject(GetCardByIdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
