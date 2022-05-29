import { Component, OnInit } from '@angular/core';
import { GenericService } from 'src/app/services/generic.service';

@Component({
  selector: 'app-list-movies',
  templateUrl: './list-movies.component.html',
  styleUrls: ['./list-movies.component.css']
})
export class ListMoviesComponent implements OnInit {
  datoUsuario: any;
  css: boolean = true
  loanding: boolean = false
  constructor(private genericService: GenericService) { }

  ngOnInit() {
    window.document.title = 'Mi Lista De Favoritos';
    this.loanding = true
    this.datosLista()
  }
  

  datosLista() {
    const datosUsuario = JSON.parse(localStorage.getItem('usuario'));
    this.datoUsuario = datosUsuario?.favoriteMovies
    this.loanding = false
  }
}
