import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalSeekerComponent } from '../modal-seeker/modal-seeker.component';
import { SubSink } from 'subsink';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit, OnDestroy  {
  datoUsuario;
  subs = new SubSink();
  constructor(private matDialog: MatDialog) {}

  ngOnInit(): void {
    this.datoUsuario = JSON.parse(localStorage.getItem('usuario'))
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  openModalSeeker(): void {
    const dialogRef = this.matDialog.open(ModalSeekerComponent, {
      width: '100vw',
      maxWidth: '100vw',
      height: '90%',
    });
    this.subs.sink = dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
}
