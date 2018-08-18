import { TestBed, inject } from '@angular/core/testing';

import { SeguridadService } from './seguridad.service';

describe('SeguridadService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SeguridadService]
    });
  });

  it('should be created', inject([SeguridadService], (service: SeguridadService) => {
    expect(service).toBeTruthy();
  }));
});
