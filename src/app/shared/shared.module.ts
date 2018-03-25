import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { NgZorroAntdModule } from 'ng-zorro-antd';
import {FooterComponent} from "./component/footer/footer.component";

const sharedModule = [
  CommonModule,
  FormsModule,
  HttpClientModule,
  ReactiveFormsModule,
  NgZorroAntdModule,
];


@NgModule({
  imports: sharedModule,
  declarations: [FooterComponent],
  exports: [sharedModule, FooterComponent]
})
export class SharedModule { }
