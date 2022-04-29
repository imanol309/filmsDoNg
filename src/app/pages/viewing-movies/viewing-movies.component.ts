import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-viewing-movies',
  templateUrl: './viewing-movies.component.html',
  styleUrls: ['./viewing-movies.component.css']
})
export class ViewingMoviesComponent implements OnInit {
  peliDato: any;
  constructor(private rutaActiva: ActivatedRoute) { }

  ngOnInit(): void {
    this.rutaActiva.paramMap.subscribe(params => {
      this.peliDato = params.get('idpeli')
    })
  }

}
