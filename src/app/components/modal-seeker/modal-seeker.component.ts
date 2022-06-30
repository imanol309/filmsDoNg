import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import { HomeDateMovie } from '../../pages/home/models/home.model';

@Component({
  selector: 'app-modal-seeker',
  templateUrl: './modal-seeker.component.html',
  styleUrls: ['./modal-seeker.component.css'],
})
export class ModalSeekerComponent implements OnInit, OnDestroy {
  datosObjPelicula: HomeDateMovie;
  data$: any;
  pelisRandom: any;
  src: String;
  verInfo: boolean = false;
  loanding: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  ngOnDestroy(): void {}

  search(value: any): any {
    function capitalizeWords(val) {
      return val
        .toLowerCase()
        .trim()
        .split(' ')
        .map((v) => v[0]?.toUpperCase() + v.substr(1))
        .join(' ');
    }
    this.router.navigate(['/pelis/seach/', capitalizeWords(value)]);
  }

  borrar() {
    this.src = ''
    this.data$ = [];
    this.router.navigate(['/pelis/home']);
  }
}
