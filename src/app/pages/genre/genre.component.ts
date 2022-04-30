import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HomeDateMovie } from '../home/models/home.model';

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.css']
})
export class GenreComponent implements OnInit {
  genre: any;
  datosGenre: HomeDateMovie;
  constructor(private rutaActiva: ActivatedRoute) { 
    this.paramsRutas()
  }

  ngOnInit(): void {

  }

  paramsRutas() {
    this.rutaActiva.paramMap.subscribe(params => {
      this.genre = params.get('parameter')
    })
    this.genre = this.genre.replace(/,/g, '/')
  }


  getGenre() {
  }

  
}
