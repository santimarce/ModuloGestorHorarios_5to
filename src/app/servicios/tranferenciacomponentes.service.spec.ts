import { TestBed } from '@angular/core/testing';

import { TranferenciacomponentesService } from './tranferenciacomponentes.service';

describe('TranferenciacomponentesService', () => {
  let service: TranferenciacomponentesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TranferenciacomponentesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
