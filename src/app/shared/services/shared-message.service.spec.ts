import { TestBed } from '@angular/core/testing';

import { SharedMessageService } from './shared-message.service';

describe('SharedMessageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SharedMessageService = TestBed.get(SharedMessageService);
    expect(service).toBeTruthy();
  });
});
