import { TestBed } from '@angular/core/testing';

import { RemindersService } from './reminders.service';

describe('RemindersService', () => {
  let service: RemindersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RemindersService);
  });
// Test to check if the service is created successfully
  it('should be created', () => {
    //check if it exists
    expect(service).toBeTruthy();
  });
});
