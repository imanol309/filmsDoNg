import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SubSink } from 'subsink';
import { ViewingMoviesService } from './services/viewing-movies.service';

@Component({
  selector: 'app-viewing-movies',
  templateUrl: './viewing-movies.component.html',
  styleUrls: ['./viewing-movies.component.css']
})
export class ViewingMoviesComponent implements OnInit {
  peliDato: any;
  subs = new SubSink();

  constructor(private rutaActiva: ActivatedRoute,
    private viewingMoviesService: ViewingMoviesService) { }

  ngOnInit(): void {
    this.rutaActiva.paramMap.subscribe(params => {
      this.peliDato = params.get('idpeli')
    })
    this.datosUnicos(this.peliDato)
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  datosUnicos(value: any): any {
    // this.isloading = true;
    this.subs.sink = this.viewingMoviesService.getPelisTitulo(value).subscribe((datos) => {
      this.peliDato = datos;
    });
  }
  
}
