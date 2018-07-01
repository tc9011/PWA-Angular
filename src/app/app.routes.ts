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
    loadChildren: './dronestre/dronestre.module#DronestreModule',    //lazy load
  },
  {
    path: '**',
    component: HomeComponent,
  }
];
