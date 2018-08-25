import { TestBed, inject } from '@angular/core/testing';

import { CancionesService } from './canciones.service';

describe('CancionesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CancionesService]
    });
  });

  it('should be created', inject([CancionesService], (service: CancionesService) => {
    expect(service).toBeTruthy();
  }));
});
