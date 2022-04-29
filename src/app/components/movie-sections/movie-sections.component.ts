import { Component,  OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-sections',
  templateUrl: './movie-sections.component.html',
  styleUrls: ['./movie-sections.component.css'],
})
export class MovieSectionsComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  routerGenre(genre: any) {
    this.router.navigate(['/pelis/genre/'+genre]);
  }
}
