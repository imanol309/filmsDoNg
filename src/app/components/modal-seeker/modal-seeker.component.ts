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
  isloading = false;
  src: String;
  css: boolean = false;
  constructor(
    public dialogRef: MatDialogRef<ModalSeekerComponent>,
    private homeServices: HomeService
  ) {}

  ngOnInit(): void {}

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
        .map((v) => v[0].toUpperCase() + v.substr(1))
        .join(' ');
    }
    this.isloading = true;
    this.subs.sink = this.homeServices.getPelisTitulo(capitalizeWords(value)).subscribe((datos) => {
      this.data$ = datos;
    });
  }
}
