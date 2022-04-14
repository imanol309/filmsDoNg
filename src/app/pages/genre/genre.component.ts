import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.css']
})
export class GenreComponent implements OnInit {
  genre: {parameter: string}
  constructor(private rutaActiva: ActivatedRoute) { }

  ngOnInit(): void {
    this.genre = {
      parameter: this.rutaActiva.snapshot.params.parameter,
    };
    this.rutaActiva.params.subscribe(
      (params: Params) => {
        this.genre.parameter = params.parameter;
      }
    );
    console.log(this.genre.parameter)
  }

}
