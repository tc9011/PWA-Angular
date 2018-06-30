import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { ServiceWorkerModule } from '@angular/service-worker';
import { AppComponent } from './app.component';

import { environment } from '../environments/environment';
import { SharedModule } from './shared/shared.module';
import { DronestreComponent } from './dronestre/dronestre.component';
import { DronestreService } from './dronestre/services/dronestre.service';
import { HttpService } from './shared/services/http.service';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './shared/component/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    DronestreComponent,
    HomeComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    RouterModule.forRoot(appRoutes),
    ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production})
  ],
  providers: [DronestreService, HttpService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
