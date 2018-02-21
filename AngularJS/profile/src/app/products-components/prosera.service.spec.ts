import { TestBed, inject } from '@angular/core/testing';

import { ProseraService } from './prosera.service';

describe('ProseraService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProseraService]
    });
  });

  it('should be created', inject([ProseraService], (service: ProseraService) => {
    expect(service).toBeTruthy();
  }));
});
