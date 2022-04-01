import { Component, OnDestroy, OnInit } from '@angular/core';
import { HomeService } from '../../services/home.service';
import { SubSink } from 'subsink';

@Component({
  selector: 'app-movie-sections',
  templateUrl: './movie-sections.component.html',
  styleUrls: ['./movie-sections.component.css'],
})
export class MovieSectionsComponent implements OnInit, OnDestroy {
  datos = null;
  subs = new SubSink();
  constructor(private homeServices: HomeService) {}

  ngOnInit(): void {
    this.verDatos();
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  verDatos() {
    this.subs.sink = this.homeServices.getPelis().subscribe((arg) => {
      this.datos = arg;
    });
  }
}
