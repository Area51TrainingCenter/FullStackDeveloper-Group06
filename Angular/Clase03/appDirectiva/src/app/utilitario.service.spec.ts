import { TestBed, inject } from '@angular/core/testing';

import { UtilitarioService } from './utilitario.service';

describe('UtilitarioService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UtilitarioService]
    });
  });

  it('should be created', inject([UtilitarioService], (service: UtilitarioService) => {
    expect(service).toBeTruthy();
  }));
});
