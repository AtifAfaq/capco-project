import { TestBed } from '@angular/core/testing';

import { CapcousersService } from './capcousers.service';

describe('CapcousersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CapcousersService = TestBed.get(CapcousersService);
    expect(service).toBeTruthy();
  });
});
