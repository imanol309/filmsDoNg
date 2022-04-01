import { Component, OnDestroy, OnInit } from '@angular/core';
import { HomeService } from '../../services/home.service';
import { SubSink } from 'subsink';
import {HomeDateMovie} from '../../models/home.model'
@Component({
  selector: 'app-movie-sections',
  templateUrl: './movie-sections.component.html',
  styleUrls: ['./movie-sections.component.css'],
})
export class MovieSectionsComponent implements OnInit, OnDestroy {
  datos: HomeDateMovie;
  subs = new SubSink();
  constructor(private homeServices: HomeService) {}

  ngOnInit(): void {
    this.verDatos();
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  verDatos(): void {
    this.subs.sink = this.homeServices.getPelis().subscribe((arg: HomeDateMovie) => {
      this.datos = arg;
      console.log(arg)
    });
  }
}
