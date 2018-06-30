import { DronestreComponent } from './dronestre/dronestre.component';
import { HomeComponent } from './home/home.component';

export const appRoutes = [
  {
    path: '',
    redirectTo:'home',
    pathMatch:'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'dronestre',
    component: DronestreComponent,
  },
  {
    path: '**',
    component: HomeComponent,
  }
];
