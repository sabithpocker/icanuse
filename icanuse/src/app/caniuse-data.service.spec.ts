import { TestBed, inject } from '@angular/core/testing';

import { CaniuseDataService } from './caniuse-data.service';

describe('CaniuseDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CaniuseDataService]
    });
  });

  it('should ...', inject([CaniuseDataService], (service: CaniuseDataService) => {
    expect(service).toBeTruthy();
  }));
});
