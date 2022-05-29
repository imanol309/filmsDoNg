import { Component, OnInit } from '@angular/core';
import { HomeDateMovie } from '../home/models/home.model';
import { MoreViewService } from './services/more-view.service';

@Component({
  selector: 'app-more-view',
  templateUrl: './more-view.component.html',
  styleUrls: ['./more-view.component.css'],
})
export class MoreViewComponent implements OnInit {
  datosPelisMasVistas: HomeDateMovie;
  css: boolean = true;
  loanding: boolean = false;
  constructor(private moreViewService: MoreViewService) {}

  ngOnInit() {
    window.document.title = 'La Mas Vistas';
    this.loanding = true;
    this.getMasVistas();
  }

  getMasVistas() {
    this.moreViewService.getPelisMasVistas().subscribe((datos) => {
      this.datosPelisMasVistas = datos;
      this.loanding = false;
    });
  }
}
