import { TestBed, inject } from '@angular/core/testing';

import { DronestreService } from './dronestre.service';

describe('DronestreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DronestreService]
    });
  });

  it('should be created', inject([DronestreService], (service: DronestreService) => {
    expect(service).toBeTruthy();
  }));
});
