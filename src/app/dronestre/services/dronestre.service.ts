import { Injectable } from '@angular/core';
import { HttpService } from '../../shared/services/http.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DronestreService {

  constructor(private httpService: HttpService) { }

  getData(): Observable<any> {
    const api = 'https://api.teleport.org/api/urban_areas/slug:san-francisco-bay-area/images/';
    return this.httpService.getData(api);
  }
}
