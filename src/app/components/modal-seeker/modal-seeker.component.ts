import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { HomeService } from 'src/app/pages/home/services/home.service';
import { SubSink } from 'subsink';
import { HomeDateMovie } from '../../pages/home/models/home.model';
import { Subject } from 'rxjs';
import { FormControl } from '@angular/forms';
import { finalize, map } from 'rxjs/operators';

@Component({
  selector: 'app-modal-seeker',
  templateUrl: './modal-seeker.component.html',
  styleUrls: ['./modal-seeker.component.css'],
})
export class ModalSeekerComponent implements OnInit, OnDestroy {
  subs = new SubSink();
  datosObjPelicula: HomeDateMovie;
  data$: any;
  isloading = false
  src: String;
  css: boolean = false
  constructor(
    public dialogRef: MatDialogRef<ModalSeekerComponent>,
    private homeServices: HomeService
  ) {}

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  search(value: any): any {
    console.log(value)
    this.isloading = true
    this.homeServices.getPelisTitulo(value).subscribe((datos) => {
      console.log(datos)
      this.data$ = datos
    })
      // .pipe(
      //   map((datos) => datos),
      //   finalize(() => this.isloading = false)
      // )
  }


}
