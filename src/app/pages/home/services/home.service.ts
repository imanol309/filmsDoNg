 import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor(private httpClient: HttpClient) {}

  getPelis() {
    return this.httpClient
      .get(`${environment.URL_API}/api/verPelis`)
      .pipe(catchError((err) => throwError(err)));
  }
}
