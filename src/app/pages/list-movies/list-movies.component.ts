import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-movies',
  templateUrl: './list-movies.component.html',
  styleUrls: ['./list-movies.component.css']
})
export class ListMoviesComponent implements OnInit {
  datoUsuario: any;
  css: boolean = true
  loanding: boolean = false
  constructor() { }

  ngOnInit() {
    this.loanding = true
    this.datoUsuario = JSON.parse(localStorage.getItem('usuario'))
    this.datoUsuario = this.datoUsuario?.favoriteMovies
    this.loanding = false
  }

}
