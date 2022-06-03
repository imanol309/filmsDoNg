import { Component, OnDestroy, OnInit } from '@angular/core';
import { GenericService } from 'src/app/services/generic.service';
import { SubSink } from 'subsink';

@Component({
  selector: 'app-list-movies',
  templateUrl: './list-movies.component.html',
  styleUrls: ['./list-movies.component.css'],
})
export class ListMoviesComponent implements OnInit, OnDestroy {
  datoUsuario: any;
  css: boolean = true;
  loanding: boolean = false;
  subs = new SubSink();
  constructor(private genericService: GenericService) {}

  ngOnInit() {
    window.document.title = 'Mi Lista De Favoritos';
    this.loanding = true;
    this.datosLista();
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  datosLista() {
    const datosFormulario = JSON.parse(localStorage.getItem('Formulario'));
    this.loanding = false;
    this.subs.sink = this.genericService
      .postLogin(datosFormulario)
      .subscribe((value) => {
        this.datoUsuario = value?.DatosLogin?.favoriteMovies;
        localStorage.setItem(
          'usuario',
          JSON.stringify(value?.DatosLogin)
        );
        this.loanding = false;
      });
  }
}
