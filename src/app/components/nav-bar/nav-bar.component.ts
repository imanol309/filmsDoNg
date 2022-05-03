import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ModalSeekerComponent } from '../modal-seeker/modal-seeker.component';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  constructor(
    private matDialog: MatDialog,
  ) {}

  ngOnInit(): void {}

  openModalSeeker(): void {
    const dialogRef = this.matDialog.open(ModalSeekerComponent, {
      width: '90vw',
      height: '50vw',
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
}
