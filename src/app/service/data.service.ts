/*
 * (c)Viavi Solutions 2018
 * Last modified: Tuesday, 17th July 2018 10:11:22 pm
 * Author: Valentin Raduti (deroude@gmail.com>)
 */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

import { environment } from "../../environments/environment"
import { DataBatch } from '../domain/data.batch';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  public getData(): Observable<DataBatch> {
    return this.http.get<DataBatch>(environment.API_ROOT + "/data").pipe(
      retry(3),
      catchError((err) => {
        console.error("Error retrieving data", err);
        return of(null);
      })
    );;
  }
}
