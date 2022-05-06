import { Component, OnInit, Input } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { HomeDateMovie } from 'src/app/pages/home/models/home.model';
import { ModalSeekerComponent } from '../modal-seeker/modal-seeker.component';

@Component({
  selector: 'app-view-crash',
  templateUrl: './view-crash.component.html',
  styleUrls: ['./view-crash.component.css'],
})
export class ViewCrashComponent implements OnInit {
  @Input() datosPelicula: HomeDateMovie;
  @Input() Css: boolean;
  num: number = 15;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  routerMovies(titulo: String) {
    // this.dialogRef.close();
    this.router.navigate(['/pelis/movies/' + titulo]);
  }

  cargarMas() {
    this.num = this.num + 15;
  }
}
