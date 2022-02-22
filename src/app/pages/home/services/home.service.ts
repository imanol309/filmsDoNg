import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor(private httpClient: HttpClient) {}

  getPelis() {
    return this.httpClient
      .get(`https://api-peliculas-do.herokuapp.com/api/verPelis`)
      .pipe(catchError((err) => throwError(err)));
  }
}