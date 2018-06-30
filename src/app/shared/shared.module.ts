import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { NgZorroAntdModule } from 'ng-zorro-antd';
import { NavbarComponent } from './component/navbar/navbar.component';

const sharedModule = [
  CommonModule,
  FormsModule,
  HttpClientModule,
  ReactiveFormsModule,
  NgZorroAntdModule,
];


@NgModule({
  imports: sharedModule,
  declarations: [],
  exports: [sharedModule]
})
export class SharedModule { }
