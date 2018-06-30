import { Component, OnInit } from '@angular/core';
import { DronestreService } from './services/dronestre.service';

@Component({
  selector: 'app-dronestre',
  templateUrl: './dronestre.component.html',
  styleUrls: ['./dronestre.component.scss']
})
export class DronestreComponent implements OnInit {
  href: string;
  attribution: any;

  constructor(private dronestreService: DronestreService) {
  }

  ngOnInit() {
    this.getDronestreData();
  }

  getDronestreData() {
    this.dronestreService.getData().subscribe(
      res => {
        this.attribution = res.photos[0].attribution;
        this.href = res.photos[0].image.web;
      },
      error => {
        console.log(error)
      })
  }
}
