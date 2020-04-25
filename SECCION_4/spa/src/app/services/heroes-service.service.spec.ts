import { TestBed } from '@angular/core/testing';

import { HeroesService } from './heroes-service.service';

describe('HeroesServiceService', () => {
  let service: HeroesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeroesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
