import { Component, OnInit } from '@angular/core';
import { DronestreService } from './services/dronestre.service';
import { Attribution } from './dronestre.typings';

@Component({
  selector: 'app-dronestre',
  templateUrl: './dronestre.component.html',
  styleUrls: ['./dronestre.component.scss']
})
export class DronestreComponent implements OnInit {
  href: string;
  attribution: Attribution;

  constructor(private dronestreService: DronestreService) {
    this.attribution = {
      license: '',
      photographer: '',
      site: '',
      source: '',
    };
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
