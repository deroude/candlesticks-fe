import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DataBatch } from '../../domain/data.batch';

@Component({
  selector: 'app-candlestick-chart',
  templateUrl: './candlestick-chart.component.html',
  styleUrls: ['./candlestick-chart.component.css']
})
export class CandlestickChartComponent implements OnInit {

  @Input("data")
  data: DataBatch[];

  @Input("maxSize")
  maxSize: number;

  @Output("dataPointClick")
  dataPointClick: EventEmitter<any>;

  constructor() { }

  ngOnInit() {

  }
}
