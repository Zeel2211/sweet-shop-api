import { TestBed } from '@angular/core/testing';

import { SweetShopService } from './sweet-shop-service';

describe('SweetShopService', () => {
  let service: SweetShopService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SweetShopService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
