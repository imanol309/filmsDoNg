import { Component, OnDestroy, OnInit } from '@angular/core';
import { HomeDateMovie } from './models/home.model';
import { SubSink } from 'subsink';
import { HomeService } from './services/home.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
  datos: HomeDateMovie;
  subs = new SubSink();

  constructor(private homeServices: HomeService, private router: Router) {}

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
        this.datos = datosPelis;
      });
  }

  routerMovies(titulo: String, db: any) {
    this.router.navigate(['/pelis/movies/'+titulo]);
    console.log(db)
  }
}
