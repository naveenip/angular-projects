import { TestBed } from '@angular/core/testing';

import { BlogServiceDataService } from './blog-service-data.service';

describe('BlogServiceDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BlogServiceDataService = TestBed.get(BlogServiceDataService);
    expect(service).toBeTruthy();
  });
});
