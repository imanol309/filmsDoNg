import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SubSink } from 'subsink';
import { ViewingMoviesService } from './services/viewing-movies.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-viewing-movies',
  templateUrl: './viewing-movies.component.html',
  styleUrls: ['./viewing-movies.component.css'],
})
export class ViewingMoviesComponent implements OnInit {
  peliDato: any;
  peliID: any;
  subs = new SubSink();
  loanding: boolean = false;
  loandingGet: boolean = false;
  css: boolean = true;
  datosPeliculas: any;
  constructor(
    private rutaActiva: ActivatedRoute,
    private viewingMoviesService: ViewingMoviesService,
    private sanitizer: DomSanitizer
  ) {
    this.rutaActiva.paramMap.subscribe((params) => {
      this.peliID = params.get('idpeli');
    });
    this.datosUnicos(this.peliID);
  }

  ngOnInit(): void {
    this.loanding = true;
    this.loandingGet = true;
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  datosUnicos(value: any): any {
    this.subs.sink = this.viewingMoviesService
      .getPelisId(value)
      .subscribe((datos) => {
        if (datos[0] === null) {
          this.subs.sink = this.viewingMoviesService
            .getPelisMasVistasTitulo(value)
            .subscribe((datos) => {
              this.peliDato = datos;
              this.getPeliculas();
              this.loanding = false;
            });
        }
        this.peliDato = datos;
        console.log(this.peliDato)
        window.document.title = `${this.peliDato[0]?.titulo} - FilmsDo`;
        this.getPeliculas();
        this.loanding = false;
      });
  }

  getPeliculas() {
    let genero = this.peliDato[0]?.genero;
    this.viewingMoviesService.getGenre(genero).subscribe((datos) => {
      this.datosPeliculas = datos;
      this.datosPeliculas.sort((a, b) => Math.random() - 0.5);
      this.loandingGet = false;
    });
  }

  transform(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
