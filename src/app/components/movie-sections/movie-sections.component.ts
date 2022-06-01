import { Component, OnInit, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-movie-sections',
  templateUrl: './movie-sections.component.html',
  styleUrls: ['./movie-sections.component.css'],
})
export class MovieSectionsComponent implements OnInit {
  datoUsuario;
  rutaImg;
  @ViewChild(MatSidenav) sideRight: MatSidenav;
  @ViewChild(MatSidenav) sideLeft: MatSidenav;
  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;
  constructor() {}

  ngOnInit(): void {
    this.datoUsuario = JSON.parse(localStorage.getItem('usuario'));
    const img =  this.datoUsuario?.logo
    this.rutaImg = `../../../../../assets/img/perfil/${img}.png`
  }

}




