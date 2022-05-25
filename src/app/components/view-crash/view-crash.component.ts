import { Component, OnInit, Input, OnDestroy, ViewChild, Renderer2, ElementRef } from '@angular/core';
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
  datoUsuario;
  numSlice: any = 15;
  cssVer: boolean = true;
  arrayId = [];
  constructor(private router: Router, private genericService: GenericService) {}
  
  ngOnInit(): void {
    if (!this.Css) {
      this.cssVer = false;
    }
    this.datoUsuario = JSON.parse(localStorage.getItem('usuario'))
    this.forGuardad()
  }

  cilccc(d, datos){
    this.agregarPelicula(datos)
    d.src = "http://localhost:8888/assets/img/icon/guardar-instagram-guardado.png"
    this.forGuardad()
    this.ifClases(datos._id)
   }

  ngOnDestroy(): void {
    this.numSlice = 15;
  }

  routerMovies(titulo: String) {
    this.router.navigate(['/pelis/movies/' + titulo]);
  }

  cargarMas() {
    if (this.numSlice < this.datosPelicula.length) {
      this.numSlice = this.numSlice + 15;
      if (this.numSlice > this.datosPelicula.length) {
        this.cssVer = false;
      }
    }
  }

  agregarPelicula(datos) {
    this.genericService.postAddMovieList(datos).subscribe((datoGuradado) => {
      localStorage.setItem('usuario', JSON.stringify(datoGuradado?.moviesNew));
      this.ifGuardad(datos._id)
    })
  }

  forGuardad() {
    this.datoUsuario.favoriteMovies?.map((x) => {
      this.arrayId.push(x._id)
    })
  }

  ifGuardad(d) {
    if (this.arrayId.includes(d)) {
      return '../../../../../assets/img/icon/guardar-instagram-guardado.png'
    } else {
      return '../../../../../assets/img/icon/guardar-instagram-sin-guarda.png'
    }
  }

  ifClases(d) {
    if (this.arrayId.includes(d)) {
      return 'imgGuardad imgGuardadYes'
    } else {
      return 'imgGuardad'
    }
}

}
