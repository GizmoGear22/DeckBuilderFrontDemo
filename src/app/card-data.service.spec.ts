import { TestBed } from '@angular/core/testing';

import { CardDataService } from './card-data.service';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

describe('CardDataService', () => {
  let service: CardDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers:[CardDataService, provideHttpClient(), provideHttpClientTesting()]
    });
    service = TestBed.inject(CardDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
