import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

import {MatSliderModule, MatSlideToggleModule} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng5SliderModule } from 'ng5-slider';
import {NgxBootstrapSliderModule} from "ngx-bootstrap-slider";
import {SliderModule} from 'primeng/slider';
@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatSliderModule,
    FormsModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
    Ng5SliderModule,
    NgxBootstrapSliderModule,
    SliderModule
  ]
})
export class HomeModule { }
