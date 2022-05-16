import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { HomeDateMovie } from '../../home/models/home.model';

@Injectable({
  providedIn: 'root',
})
export class MoreViewService {
  constructor(private httpClient: HttpClient) {}

  getPelisMasVistas(): Observable<HomeDateMovie> {
    return this.httpClient
      .get<HomeDateMovie>(`${environment.URL_API}/api/verPelis/masVistas`)
      .pipe(catchError((err) => throwError(err)));
  }
}
