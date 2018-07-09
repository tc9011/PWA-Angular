import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ServiceWorkerModule, SwPush } from '@angular/service-worker';
import { AppComponent } from './app.component';

import { environment } from '../environments/environment';
import { SharedModule } from './shared/shared.module';
import { HttpService } from './shared/services/http.service';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './shared/component/navbar/navbar.component';
import { NewsletterService } from './shared/services/newsletter.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    RouterModule.forRoot(appRoutes),
    ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production})
  ],
  providers: [HttpService, SwPush, NewsletterService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
