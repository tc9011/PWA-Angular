import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { ServiceWorkerModule } from '@angular/service-worker';
import { AppComponent } from './app.component';

import { environment } from '../environments/environment';
import { SharedModule } from './shared/shared.module';
import { SidebarModule } from './shared/component/sidebar/sidebar.module';
import { RepeatValidatorDirective } from './shared/directive/password-match.directive';

@NgModule({
  declarations: [
    AppComponent,
    RepeatValidatorDirective
  ],
  imports: [
    BrowserModule,
    SharedModule,
    SidebarModule,
    ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
