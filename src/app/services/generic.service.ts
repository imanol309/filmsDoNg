import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { homeLoginSchema } from '../pages/home/models/home.model';
@Injectable({
  providedIn: 'root',
})
export class GenericService {
  constructor(private httpClient: HttpClient) {}

  postLogin(datos): Observable<any> {
    return this.httpClient
      .post<any>(`${environment.URL_API}/api/user/loginUser`, {
        email: datos.email,
        password: datos.password
      })
      .pipe(catchError((err) => throwError(err)));
  }
}
