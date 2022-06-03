import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
  datoUsuario;
  rutaImg;
  constructor() { }

  ngOnInit() {
    this.datoUsuario = JSON.parse(localStorage.getItem('usuario'));
    const img =  this.datoUsuario?.logo
    this.rutaImg = `../../../../../assets/img/perfil/${img}.png`
  }

  eliminarDatos() {
    localStorage.removeItem('usuario');
    localStorage.removeItem('Token');
    localStorage.removeItem('Formulario');
    location.reload();
  }

}
