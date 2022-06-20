import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SubSink } from 'subsink';
import { HomeDateMovie } from '../home/models/home.model';
import { HomeService } from '../home/services/home.service';

@Component({
  selector: 'app-seach',
  templateUrl: './seach.component.html',
  styleUrls: ['./seach.component.css'],
})
export class SeachComponent implements OnInit {
  subs = new SubSink();
  datosObjPelicula: HomeDateMovie;
  data$: any;
  pelisRandom: any;
  peliTitulo: any;
  verInfo: boolean = false;
  loanding: boolean = false;
  constructor(
    private homeServices: HomeService,
    private rutaActiva: ActivatedRoute
  ) {
    this.funcion()
  }

  ngOnInit() {}

  funcion() {
    this.rutaActiva.paramMap.subscribe((params) => {
      this.peliTitulo = params.get('tituloPelis');
      this.datosBuscador(this.peliTitulo);
    });
  }

  datosBuscador(value) {
    this.subs.sink = this.homeServices
      .getPelisTitulo(value)
      .subscribe((datos) => {
        this.data$ = datos;
        this.loanding = false;
        if (this.data$[0] !== null) {
          this.verInfo = true;
          setTimeout(() => {
            this.getPelis();
          }, 1000);
        }
      });
  }

  getPelis(): void {
    this.subs.sink = this.homeServices.getPelis().subscribe((datos) => {
      this.pelisRandom = datos;
      this.loanding = false;
      this.pelisRandom.sort((a, b) => Math.random() - 0.5);
    });
  }
}
