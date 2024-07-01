import { TestBed } from '@angular/core/testing';

import { PostCardToAPIService } from './post-card-to-api.service';

describe('PostCardToAPIService', () => {
  let service: PostCardToAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostCardToAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
