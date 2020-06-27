import { TestBed } from '@angular/core/testing';

import { CargaImagenesServiceService } from './carga-imagenes-service.service';

describe('CargaImagenesServiceService', () => {
  let service: CargaImagenesServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CargaImagenesServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
