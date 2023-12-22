import { TestBed } from '@angular/core/testing';

import { AccountLineService } from './account-line.service';

describe('AccountLineService', () => {
  let service: AccountLineService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccountLineService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
