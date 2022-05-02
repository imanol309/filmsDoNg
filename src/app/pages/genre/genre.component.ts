import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HomeDateMovie } from '../home/models/home.model';
import { GenreService } from './services/genre.service';
import { SubSink } from 'subsink';

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.css'],
})
export class GenreComponent implements OnInit, OnDestroy {
  genre: any;
  datosGenre: HomeDateMovie;
  subs = new SubSink();

  constructor(
    private rutaActiva: ActivatedRoute,
    private genreService: GenreService
  ) {
    this.paramsRutas();
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  paramsRutas() {
    this.rutaActiva.paramMap.subscribe((params) => {
      this.genre = params.get('parameter');
      this.getGenre(this.genre.replace(/,/g, '_'));
    });
    this.genre = this.genre.replace(/· /g, '/');
  }

  getGenre(genre) {
    this.subs.sink = this.genreService
      .getGenre(genre)
      .subscribe((datosGenre) => {
        this.datosGenre = datosGenre;
      });
  }
}
