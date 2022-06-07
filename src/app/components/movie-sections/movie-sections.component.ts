import {
  Component,
  OnInit,
  ViewChild,
  Renderer2,
  ElementRef,
} from '@angular/core';
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
  @ViewChild('sideRight') sideRight: MatSidenav;
  @ViewChild('sideLeft') sideLeft: MatSidenav;
  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;
  @ViewChild('botonMenuOne') botonMenuOne: ElementRef;
  @ViewChild('botonMenuTwo') botonMenuTwo: ElementRef;
  @ViewChild('botonMenuThree') botonMenuThree: ElementRef;
  constructor(private renderer2: Renderer2) {}

  ngOnInit(): void {
    this.datoUsuario = JSON.parse(localStorage.getItem('usuario'));
    const img = this.datoUsuario?.logo;
    this.rutaImg = `../../../../../assets/img/perfil/${img}.png`;
  }

  MenuTrue() {
    this.renderer2.addClass(this.botonMenuOne.nativeElement, 'rallaActiva');
    this.renderer2.addClass(this.botonMenuTwo.nativeElement, 'rallaActiva');
    this.renderer2.addClass(this.botonMenuThree.nativeElement, 'rallaActiva');
  }

  MenuFlase() {
    this.renderer2.removeClass(this.botonMenuOne.nativeElement, 'rallaActiva');
    this.renderer2.removeClass(this.botonMenuTwo.nativeElement, 'rallaActiva');
    this.renderer2.removeClass(
      this.botonMenuThree.nativeElement,
      'rallaActiva'
    );
  }
}
