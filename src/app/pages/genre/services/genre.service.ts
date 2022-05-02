import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { HomeDateMovie } from '../../home/models/home.model';

@Injectable({
  providedIn: 'root',
})
export class GenreService {
  constructor(private httpClient: HttpClient) {}

  getGenre(genre): Observable<HomeDateMovie> {
    return this.httpClient
      .get<HomeDateMovie>(`${environment.URL_API}/api/verPelis/genero/${genre}`)
      .pipe(catchError((err) => throwError(err)));
  }
}
