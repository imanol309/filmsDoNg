import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import {
  HomeDateMovie,
  homeDateMovieVistas,
} from '../../home/models/home.model';
import { environment } from 'src/environments/environment';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ViewingMoviesService {
  constructor(private httpClient: HttpClient) {}

  getPelis(): Observable<HomeDateMovie> {
    return this.httpClient
      .get<HomeDateMovie>(`${environment.URL_API}/api/verPelis`)
      .pipe(catchError((err) => throwError(err)));
  }

  getGenre(genre): Observable<HomeDateMovie> {
    return this.httpClient
      .get<HomeDateMovie>(`${environment.URL_API}/api/verPelis/genero/${genre}`)
      .pipe(catchError((err) => throwError(err)));
  }

  getPelisId(id: String): Observable<HomeDateMovie> {
    return this.httpClient
      .get<HomeDateMovie>(`${environment.URL_API}/api/verPelis/${id}`)
      .pipe(catchError((err) => throwError(err)));
  }

  getPelisMasVistasTitulo(titulo: string): Observable<homeDateMovieVistas> {
    return this.httpClient
      .get<homeDateMovieVistas>(
        `${environment.URL_API}/api/verPelis/masVistas/titulo/${titulo}`
      )
      .pipe(catchError((err) => throwError(err)));
  }
}
