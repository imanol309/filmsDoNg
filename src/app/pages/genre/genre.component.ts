import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.css']
})
export class GenreComponent implements OnInit {
  genre: any;
  constructor(private rutaActiva: ActivatedRoute) { }

  ngOnInit(): void {
    this.rutaActiva.paramMap.subscribe(params => {
      this.genre = params.get('parameter')
    })
    this.genre =  this.genre.replace(/,/g, '/')
  }
  
}
