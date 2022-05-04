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
  description: String;
  css: boolean = true
  constructor(
    private rutaActiva: ActivatedRoute,
    private genreService: GenreService
  ) {
    this.paramsRutas();
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  paramsRutas() {
    this.rutaActiva.paramMap.subscribe((params) => {
      this.genre = params.get('parameter');
      this.descriptionGenre(this.genre);
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

  descriptionGenre(genre): any {
    switch (genre) {
      case 'Acción,Drama':
        this.description =
          'El llamado cine de acción es un género cinematográfico donde prima la espectacularidad de las imágenes por medio de efectos especiales de estilo clásico.';
        break;
      case 'Comedia':
        this.description =
          'La comedia es un género literario, teatral, televisivo y cinematográfico cuya trama busca hacer reír al público, ya sea mediante ironías, parodias, confusiones, equivocaciones o sarcasmos.';
        break;
      case 'Drama,Suspenso':
        this.description =
          'El género dramático es aquel que representa algún episodio o conflicto de la vida de los seres humanos por medio del diálogo de los personajes.';
        break;
      case 'Suspenso,Acción':
        this.description =
          'El suspense es una técnica común que los autores utilizan para hacer que sus narrativas sean atractivas y emocionantes, incluso hasta el final.';
        break;
      case 'Suspenso,Terror':
        this.description =
          'El horror o terror es un género literario que se define por la sensación que causa: miedo. Nöel Carroll en su libro The Philosophy of Horror explica que la característica más importante del género horror es el efecto del que se causa en la audiencia.';
        break;
      case 'Documental':
        this.description =
          'El documental se caracteriza por presentar la realidad o unos hechos determinados. Tiene una finalidad informativa y didáctica principalmente e intenta exponer la realidad de forma objetiva.';
        break;
    }
  }
}
