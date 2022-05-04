import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { HomeDateMovie } from 'src/app/pages/home/models/home.model';

@Component({
  selector: 'app-view-crash',
  templateUrl: './view-crash.component.html',
  styleUrls: ['./view-crash.component.css'],
})
export class ViewCrashComponent implements OnInit {
  @Input() datosPelicula: HomeDateMovie;
  @Input() Css: boolean;
  constructor(private router: Router) {}

  ngOnInit(): void {
  }

  routerMovies(titulo: String) {
    this.router.navigate(['/pelis/movies/'+titulo]);
  }
}
