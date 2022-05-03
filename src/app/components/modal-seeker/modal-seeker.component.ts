import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-modal-seeker',
  templateUrl: './modal-seeker.component.html',
  styleUrls: ['./modal-seeker.component.css']
})
export class ModalSeekerComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ModalSeekerComponent>,
  ) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
