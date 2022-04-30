import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { HomeDateMovie } from 'src/app/pages/home/models/home.model';

@Component({
  selector: 'app-view-crash',
  templateUrl: './view-crash.component.html',
  styleUrls: ['./view-crash.component.css'],
})
export class ViewCrashComponent implements OnInit {
  @Input() datosPelicula: HomeDateMovie;
  ojt: {}[]= [
    {
      id: '99kkdd',
      titulo: 'Iron main',
      img: 'https://www.cinemascomics.com/wp-content/uploads/2013/04/Ironman3-poster.jpg',
      genero: 'accion',
      years: '2016',
    },
    {
      id: '99kkdd',
      titulo: 'Iron main',
      img: 'https://www.cinemascomics.com/wp-content/uploads/2013/04/Ironman3-poster.jpg',
      genero: 'accion',
      years: '2016',
    },
    {
      id: '99kkdd',
      titulo: 'Iron main',
      img: 'https://www.cinemascomics.com/wp-content/uploads/2013/04/Ironman3-poster.jpg',
      genero: 'accion',
      years: '2016',
    },
  ];
  constructor(private router: Router) {}

  ngOnInit(): void {
  }

  routerMovies(titulo: String) {
    this.router.navigate(['/pelis/movies/'+titulo]);
  }
}
