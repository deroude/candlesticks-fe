/*
 * (c)Viavi Solutions 2018
 * Last modified: Tuesday, 17th July 2018 10:11:41 pm
 * Author: Valentin Raduti (deroude@gmail.com>)
 */
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './component/app.component';
import { DataService } from './service/data.service';
import { CandlestickChartComponent } from './component/candlestick-chart/candlestick-chart.component';
import { AppMaterialModule } from './app.material.module';

@NgModule({
  declarations: [
    AppComponent,
    CandlestickChartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppMaterialModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
