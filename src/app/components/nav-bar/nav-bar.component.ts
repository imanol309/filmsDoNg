import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalSeekerComponent } from '../modal-seeker/modal-seeker.component';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  datoUsuario;
  constructor(private matDialog: MatDialog) {}

  ngOnInit(): void {
    this.datoUsuario = JSON.parse(localStorage.getItem('usuario'))
  }

  openModalSeeker(): void {
    const dialogRef = this.matDialog.open(ModalSeekerComponent, {
      width: '100%',
      height: '90%',
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
}
