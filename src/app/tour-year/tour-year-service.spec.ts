import { TestBed } from '@angular/core/testing';

import { TourYearService } from './tour-year.service';

describe('TourYearService', () => {
  let service: TourYearService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TourYearService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
