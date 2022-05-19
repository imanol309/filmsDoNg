import { Component, OnInit, Input, OnDestroy } from '@angular/core';
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
  constructor(private router: Router, private genericService: GenericService) {}

  ngOnInit(): void {
    if (!this.Css) {
      this.cssVer = false;
    }
    this.datoUsuario = JSON.parse(localStorage.getItem('usuario'))
    // console.log(this.datoUsuario)
    // this.for()
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

  agregarPelicula(d) {
    this.genericService.postAddMovieList(d).subscribe((datoGuardado) => {
      const datoFormulario = JSON.parse(localStorage.getItem('Formulario'));
      this.genericService.postLogin(datoFormulario).subscribe((value) => {
        localStorage.setItem('usuario', JSON.stringify(value.DatosLogin));
      })
    })
  }

  // for() {
  //   this.datoUsuario?.favoriteMovies?.map(function(n) {
  //     console.log(n?.titulo)
  //   })
  // }
}
