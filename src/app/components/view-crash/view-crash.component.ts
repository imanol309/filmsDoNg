import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-crash',
  templateUrl: './view-crash.component.html',
  styleUrls: ['./view-crash.component.css'],
})
export class ViewCrashComponent implements OnInit {
  datos: any;
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.datos = [
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
  }

  routerMovies(titulo: String) {
    this.router.navigate(['/pelis/movies/'+titulo]);
  }
}
