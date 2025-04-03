// Importing TestBed from Angular
import { TestBed } from '@angular/core/testing';
//imported WeatherService to test.
import { WeatherService } from './weather.service';
// Describing the test suite for the WeatherService
describe('WeatherService', () => {
  // Declaring a variable 'service'
  let service: WeatherService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeatherService);
  });
//  checks whether the WeatherService is successfully created.
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
