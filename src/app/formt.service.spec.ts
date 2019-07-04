import { TestBed } from '@angular/core/testing';

import { FormtService } from './formt.service';

describe('FormtService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FormtService = TestBed.get(FormtService);
    expect(service).toBeTruthy();
  });
});
