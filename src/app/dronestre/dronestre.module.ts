import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DronestreComponent } from './dronestre.component';
import { DronestreService } from './services/dronestre.service';
import { RouterModule } from '@angular/router';
import { dronestreRoutes } from './dronestre.routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(dronestreRoutes)
  ],
  declarations: [DronestreComponent],
  providers: [DronestreService]
})
export class DronestreModule { }
