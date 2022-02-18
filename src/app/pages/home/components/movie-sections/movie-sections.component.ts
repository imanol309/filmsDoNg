import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-movie-sections',
  templateUrl: './movie-sections.component.html',
  styleUrls: ['./movie-sections.component.css'],
})
export class MovieSectionsComponent implements OnInit {
  constructor(private homeServices: HomeService) {}
  ngOnInit(): void {
    this.verDatos()
  }

  verDatos() {
    this.homeServices
    .getPelis()
    .subscribe((arg) => {
      console.log(arg)
    });
  }
}
