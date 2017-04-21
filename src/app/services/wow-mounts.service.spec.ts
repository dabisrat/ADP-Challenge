import { TestBed, inject } from '@angular/core/testing';

import { WowMountsService } from './wow-mounts.service';

describe('WowMountsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WowMountsService]
    });
  });

  it('should ...', inject([WowMountsService], (service: WowMountsService) => {
    expect(service).toBeTruthy();
  }));
});
