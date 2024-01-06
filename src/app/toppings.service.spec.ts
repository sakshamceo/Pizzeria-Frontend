import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http'
import { ToppingsService } from './toppings.service';

describe('ToppingsService', () => {
  let service: ToppingsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(ToppingsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
