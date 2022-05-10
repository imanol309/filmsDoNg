import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { HomeService } from 'src/app/pages/home/services/home.service';
import { SubSink } from 'subsink';
import { HomeDateMovie } from '../../pages/home/models/home.model';

@Component({
  selector: 'app-modal-seeker',
  templateUrl: './modal-seeker.component.html',
  styleUrls: ['./modal-seeker.component.css'],
})
export class ModalSeekerComponent implements OnInit, OnDestroy {
  subs = new SubSink();
  datosObjPelicula: HomeDateMovie;
  data$: any;
  pelisRandom: any;
  src: String;
  verInfo: boolean = false;
  loanding: boolean = false

  constructor(
    public dialogRef: MatDialogRef<ModalSeekerComponent>,
    private homeServices: HomeService
  ) {}

  ngOnInit(): void {
    this.loanding = true
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  search(value: any): any {
    function capitalizeWords(val) {
      return val
        .toLowerCase()
        .trim()
        .split(' ')
        .map((v) => v[0]?.toUpperCase() + v.substr(1))
        .join(' ');
    }
    this.subs.sink = this.homeServices
      .getPelisTitulo(capitalizeWords(value))
      .subscribe((datos) => {
        this.data$ = datos;
        this.loanding = false
        if (this.data$[0] !== null) {
          this.verInfo = true;
          setTimeout(() => {
            this.getPelis();
          }, 1000);
        }
      });
  }

  getPelis(): void {
    this.subs.sink = this.homeServices.getPelis().subscribe((datos) => {
      this.pelisRandom = datos;
      this.loanding = false
      this.pelisRandom.sort((a,b) => Math.random() - 0.5)
    });
  }
}
