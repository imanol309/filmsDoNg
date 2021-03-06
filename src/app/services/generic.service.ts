import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  putDeleteMyList(datos): Observable<any> {
    const id = JSON.parse(localStorage.getItem('usuario'));
    return this.httpClient
      .put<any>(
        `${environment.URL_API}/api/user/deleteaddMovieList/${id._id}`,
        {
          id: datos,
        }
      )
      .pipe(catchError((err) => throwError(err)));
  }

  putAddComment(datos): Observable<any> {
    const datosUsuario = JSON.parse(localStorage.getItem('usuario'));
    const headers = new HttpHeaders({
      Authorization: environment.SECRET_TOKEN,
    });
    return this.httpClient
      .patch<any>(
        `${environment.URL_API}/api/modificarPelis/comments/patch/${datos._id}`,
        {
          id: datosUsuario._id,
          email: datosUsuario.email,
          name: datosUsuario.name,
          logo: datosUsuario.logo,
          message: datos.message,
        },
        { headers }
      )
      .pipe(catchError((err) => throwError(err)));
  }

  deleteComment(datos): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: environment.SECRET_TOKEN,
    });
    return this.httpClient
      .patch<any>(
        `${environment.URL_API}/api/eliminarPelis/comments/${datos._id}`,
        {
          id: datos._idComment,
        },
        { headers }
      )
      .pipe(catchError((err) => throwError(err)));
  }
}
