import { Component, OnDestroy, OnInit } from '@angular/core';
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

  constructor(private homeServices: HomeService) {}

  ngOnInit(): void {
    this.GetDatos();
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  GetDatos(): void {
    this.subs.sink = this.homeServices
      .getPelis()
      .subscribe((datosPelis: HomeDateMovie) => {
        console.log(datosPelis)
        this.datosObjPelicula = datosPelis;
      });
  }
}
