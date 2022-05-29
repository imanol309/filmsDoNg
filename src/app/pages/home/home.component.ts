import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { HomeDateMovie } from './models/home.model';
import { SubSink } from 'subsink';
import { HomeService } from './services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
  datosObjPelicula: HomeDateMovie;
  subs = new SubSink();
  css: boolean = true;
  loanding: boolean = false
  
  constructor(private homeServices: HomeService) {
    this.GetDatos();
  }

  ngOnInit(): void {
    window.document.title = 'FilmsDo';
    this.loanding = true
    // console.log(window.innerWidth)
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  GetDatos(): void {
    this.subs.sink = this.homeServices
      .getPelis()
      .subscribe((datosPelis: HomeDateMovie) => {
        this.datosObjPelicula = datosPelis;
        this.datosObjPelicula.sort((a, b) => Math.random() - 0.5);
        this.loanding = false
      });
  }
}
