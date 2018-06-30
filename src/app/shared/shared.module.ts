import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

const sharedModule = [
  CommonModule,
  FormsModule,
  HttpClientModule,
  ReactiveFormsModule,
];


@NgModule({
  imports: sharedModule,
  declarations: [],
  exports: [sharedModule]
})
export class SharedModule { }
