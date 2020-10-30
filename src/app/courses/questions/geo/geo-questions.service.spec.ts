import { TestBed } from '@angular/core/testing';

import { GeoQuestionsService } from './geo-questions.service';

describe('GeoQuestionsService', () => {
  let service: GeoQuestionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GeoQuestionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
