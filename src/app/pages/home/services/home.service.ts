 import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { HomeDateMovie } from '../models/home.model';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor(private httpClient: HttpClient) {}

  getPelis(): Observable<{}> {
    return this.httpClient
      .get(`${environment.URL_API}/api/verPelis`)
      .pipe(catchError((err) => throwError(err)));
  }
}
