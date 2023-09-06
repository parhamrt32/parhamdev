import { TestBed } from '@angular/core/testing';

import { WelcomeStateService } from './welcome-state.service';

describe('WelcomeStateService', () => {
  let service: WelcomeStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WelcomeStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
