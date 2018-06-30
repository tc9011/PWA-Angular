import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DronestreComponent } from './dronestre.component';

describe('DronestreComponent', () => {
  let component: DronestreComponent;
  let fixture: ComponentFixture<DronestreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DronestreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DronestreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
