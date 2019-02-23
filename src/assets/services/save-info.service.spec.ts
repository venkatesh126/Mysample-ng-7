import { TestBed, inject } from '@angular/core/testing';

import { SaveInfoService } from './save-info.service';

describe('SaveInfoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SaveInfoService]
    });
  });

  it('should be created', inject([SaveInfoService], (service: SaveInfoService) => {
    expect(service).toBeTruthy();
  }));
});
