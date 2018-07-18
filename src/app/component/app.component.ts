/*
 * (c)Viavi Solutions 2018
 * Last modified: Tuesday, 17th July 2018 10:11:35 pm
 * Author: Valentin Raduti (deroude@gmail.com>)
 */
import { Component, OnInit } from '@angular/core';

import { Observable, timer } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';

import { DataService } from '../service/data.service';
import { DataBatch } from '../domain/data.batch';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private dataService: DataService) { }

  data$: Observable<DataBatch[]>;
  window: DataBatch[] = [];
  maxSize: number = 20;
  pollInterval: number = 2000;

  ngOnInit(): void {
    this.resetSubscription();
  }

  resetSubscription(): void {
    this.data$ = timer(0, this.pollInterval)
      .pipe(
        switchMap(() => this.dataService.getData()),
        map(newBatch => {
          newBatch.high = this.high(newBatch);
          newBatch.low = this.low(newBatch)
          this.window.unshift(newBatch);
          if (this.window.length > this.maxSize) {
            this.window.pop();
          }
          return this.window.sort((a, b) => Number(b.date) - Number(a.date));
        })
      );
  }

  update() {
    if (this.maxSize < 5 || this.maxSize > 40) this.maxSize = 20;
    if (this.pollInterval < 1000 || this.pollInterval > 10000) this.pollInterval = 2000;
    this.resetSubscription();
  }


  private low(d: DataBatch): number {
    return d.data.reduce((p, c) => p.value < c.value ? p : c, { type: 1, value: 100 }).value;
  }

  private high(d: DataBatch): number {
    return d.data.reduce((p, c) => p.value > c.value ? p : c, { type: 1, value: 0 }).value - this.low(d);
  }
}
