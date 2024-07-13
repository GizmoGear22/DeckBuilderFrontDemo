import { TestBed } from '@angular/core/testing';

import { PostCardToAPIService } from './post-card-to-api.service';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

describe('PostCardToAPIService', () => {
  let service: PostCardToAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers:[PostCardToAPIService, provideHttpClient(), provideHttpClientTesting()]
    });
    service = TestBed.inject(PostCardToAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
