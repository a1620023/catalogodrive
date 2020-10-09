import { TestBed } from '@angular/core/testing';

import { BuscarproductoService } from './buscarproducto.service';

describe('BuscarproductoService', () => {
  let service: BuscarproductoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BuscarproductoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
