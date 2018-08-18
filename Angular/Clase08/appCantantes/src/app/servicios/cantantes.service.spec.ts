import { TestBed, inject } from '@angular/core/testing';

import { CantantesService } from './cantantes.service';

describe('CantantesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CantantesService]
    });
  });

  it('should be created', inject([CantantesService], (service: CantantesService) => {
    expect(service).toBeTruthy();
  }));
});
