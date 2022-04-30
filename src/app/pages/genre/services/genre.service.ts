import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
// import { HomeDateMovie } from '../models/home.model';

@Injectable({
  providedIn: 'root',
})
export class genreService {
  constructor(private httpClient: HttpClient) {}

  
}