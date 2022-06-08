import {
  Component,
  OnInit,
  Input,
  OnDestroy,
  ViewChild,
  Renderer2,
  ElementRef,
} from '@angular/core';
import { Router } from '@angular/router';
import { HomeDateMovie } from 'src/app/pages/home/models/home.model';
import { GenericService } from 'src/app/services/generic.service';

@Component({
  selector: 'app-view-crash',
  templateUrl: './view-crash.component.html',
  styleUrls: ['./view-crash.component.css'],
})
export class ViewCrashComponent implements OnInit, OnDestroy {
  @Input() datosPelicula: HomeDateMovie;
  @Input() Css: boolean;
  @Input() loanding: boolean;
  @Input() viewing: Number;
  @Input() clases: String;
  @Input() MasVistas: String;
  @Input() boton: boolean = true;
  datoUsuario;
  numSlice: any = 15;
  cssVer: boolean = true;
  arrayId: any = [];

  constructor(private router: Router, private genericService: GenericService) {}

  ngOnInit(): void {
    if (!this.Css) {
      this.cssVer = false;
    }
    this.datoUsuario = JSON.parse(localStorage.getItem('usuario'));
    this.forGuardad();
  }

  imgGuardad(d, datos) {
    this.agregarPelicula(datos);
    d.src =
      'https://films-do-ng.vercel.app/assets/img/icon/guardar-instagram-guardado.png';
  }

  imgEliminar(d, id) {
    this.eliminarPelicula(id);
    d.src =
      'https://films-do-ng.vercel.app/assets/img/icon/guardar-instagram-sin-guarda.png';
  }

  ngOnDestroy(): void {
    this.numSlice = 15;
  }

  cargarMas() {
    if (this.numSlice < this.datosPelicula.length) {
      this.numSlice = this.numSlice + 10;
      if (this.numSlice > this.datosPelicula.length) {
        this.cssVer = false;
      }
    }
  }

  verCargarMas() {
    if (this.numSlice <= this.datosPelicula?.length) {
      return true;
    } else {
      return false;
    }
  }

  agregarPelicula(datos) {
    this.genericService.postAddMovieList(datos).subscribe((datoGuradado) => {
      localStorage.setItem('usuario', JSON.stringify(datoGuradado?.moviesNew));
      this.datoUsuario = JSON.parse(localStorage.getItem('usuario'));
      this.forGuardad();
    });
  }

  eliminarPelicula(id) {
    this.genericService.putDeleteMyList(id).subscribe((datos) => {
      localStorage.setItem('usuario', JSON.stringify(datos?.moviesNew));
      this.datoUsuario = JSON.parse(localStorage.getItem('usuario'));
      this.forGuardad();
    });
  }

  forGuardad() {
    this.arrayId = [];
    this.datoUsuario.favoriteMovies?.map((x) => {
      this.arrayId.push(x._id);
    });
  }

  ifGuardad(d) {
    if (this.arrayId.includes(d)) {
      return '../../../../../assets/img/icon/guardar-instagram-guardado.png';
    } else {
      return '../../../../../assets/img/icon/guardar-instagram-sin-guarda.png';
    }
  }

  ifClases(d) {
    if (this.arrayId.includes(d)) {
      return 'imgGuardad';
    } else {
      return 'imgGuardad';
    }
  }
}
