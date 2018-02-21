import { TestBed, inject } from '@angular/core/testing';

import { ProserBService } from './../products-components/proser-b.service';

describe('ProserBService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProserBService]
    });
  });

  it('should be created', inject([ProserBService], (service: ProserBService) => {
    expect(service).toBeTruthy();
  }));
});
