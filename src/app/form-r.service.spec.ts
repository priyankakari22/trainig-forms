import { TestBed } from '@angular/core/testing';

import { FormRService } from './form-r.service';

describe('FormRService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FormRService = TestBed.get(FormRService);
    expect(service).toBeTruthy();
  });
});
