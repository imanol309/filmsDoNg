import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { HomeService } from 'src/app/pages/home/services/home.service';
import { SubSink } from 'subsink';
import { HomeDateMovie } from '../../pages/home/models/home.model';
import { Subject } from 'rxjs';
import { FormControl } from '@angular/forms';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-modal-seeker',
  templateUrl: './modal-seeker.component.html',
  styleUrls: ['./modal-seeker.component.css'],
})
export class ModalSeekerComponent implements OnInit, OnDestroy {
  listFiltered: any = {};
  subs = new SubSink();
  searchTerm$ = new Subject<string>();
  datosObjPelicula: HomeDateMovie;
  search = new FormControl ('')

  constructor(
    public dialogRef: MatDialogRef<ModalSeekerComponent>,
    private homeServices: HomeService
  ) {}

  ngOnInit(): void {
    this.getPelis();
    // this.filterPelis();
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  getPelis(): void {
    this.subs.sink = this.homeServices
      .getPelis()
      .subscribe((datos: any) => {
        this.datosObjPelicula = datos;
        this.listFiltered = this.datosObjPelicula
      });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  // filterPelis(): void {
  //   this.search. valueChanges .pipe(
  //     map( search search?.toLowerCase ().trim( )),
  //     debounceTime(300),
  //     distinctuUntilChanged(),
  //     filter(search search 86 search 7.
  //     tap(search this.dataSvc . filterData( sear
  //     2),
  //     subscribe();

  // }
}
