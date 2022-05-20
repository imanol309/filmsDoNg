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
    this.loanding = true
    const datosFormulario = JSON.parse(localStorage.getItem('Formulario'));
    this.datosLista(datosFormulario)
  }
  

  datosLista(datos) {
    this.genericService.postLogin(datos).subscribe((datos) => {
      localStorage.setItem('usuario', JSON.stringify(datos?.DatosLogin));
      this.datoUsuario = JSON.parse(localStorage.getItem('usuario'));
      this.datoUsuario = this.datoUsuario?.favoriteMovies
      this.loanding = false
    })
  }
}
