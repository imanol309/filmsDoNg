import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { HomeDateMovie } from 'src/app/pages/home/models/home.model';

@Component({
  selector: 'app-view-crash',
  templateUrl: './view-crash.component.html',
  styleUrls: ['./view-crash.component.css'],
})
export class ViewCrashComponent implements OnInit, OnDestroy {
  @Input() datosPelicula: HomeDateMovie;
  @Input() Css: boolean;
  @Input() loanding: boolean;
  numSlice: any = 15;
  cssVer: boolean = true;
  screenWidth = screen.width;
  varWidthImg: string;
  varWidthContainer: string;
  constructor(private router: Router) {}

  ngOnInit(): void {
    if (!this.Css) {
      this.cssVer = false;
    }
    console.log(this.screenWidth);
    console.log(this.functionWidth());
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

  functionWidth() {
    if (this.screenWidth <= 350) {
      this.varWidthImg = 'carhImg carh350'
      this.varWidthContainer = 'containerCarh conatainer350'
    }

    if (this.screenWidth <= 500) {
      this.varWidthImg ='carhImg carh500';
      this.varWidthContainer = 'containerCarh conatainer500'
    }

    if (this.screenWidth <= 650) {
      this.varWidthImg ='carhImg carh650';
      this.varWidthContainer = 'containerCarh conatainer650'
    }
  }
}
