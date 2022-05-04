import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HomeDateMovie } from '../../home/models/home.model';
import { environment } from 'src/environments/environment';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ViewingMoviesService {
  constructor(private httpClient: HttpClient) {}

  getPelisTitulo(titulo: String): Observable<HomeDateMovie> {
    return this.httpClient
      .get<HomeDateMovie>(
        `${environment.URL_API}/api/verPelis/titulo/${titulo}`
      )
      .pipe(catchError((err) => throwError(err)));
  }
}
