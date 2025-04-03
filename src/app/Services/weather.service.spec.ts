// Importing TestBed from Angular
import { TestBed } from '@angular/core/testing';
//imported WeatherService to test.
import { WeatherService } from './weather.service';
// Describing the test suite for the WeatherService
describe('WeatherService', () => {
  let service: WeatherService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeatherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
