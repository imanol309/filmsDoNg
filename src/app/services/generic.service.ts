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
        password: datos.password,
      })
      .pipe(catchError((err) => throwError(err)));
  }

  postAddMovieList(datos): Observable<any> {
    const id = JSON.parse(localStorage.getItem('usuario'));
    return this.httpClient
      .post<any>(`${environment.URL_API}/api/user/addMovieList/${id._id}`, {
        _id: datos._id,
        titulo: datos.titulo,
        genero: datos.genero,
        Director: datos.Director,
        year: datos.año,
        Reparto: datos.Reparto,
        img: datos.img,
        video: datos.video,
        time: datos.time,
        descripcion: datos.descripcion,
      })
      .pipe(catchError((err) => throwError(err)));
  }

  postRegistrarUsuario(datos): Observable<any> {
    return this.httpClient
      .post<any>(`${environment.URL_API}/api/user/crearUser`, {
        email: datos.email,
        name: datos.name,
        password: datos.password,
        logo: datos.logo,
      })
      .pipe(catchError((err) => throwError(err)));
  }
}
