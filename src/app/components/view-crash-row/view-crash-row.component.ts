import { Component, OnInit } from '@angular/core';
import { HomeDateMovie } from 'src/app/pages/home/models/home.model';
import { HomeService } from 'src/app/pages/home/services/home.service';

@Component({
  selector: 'app-view-crash-row',
  templateUrl: './view-crash-row.component.html',
  styleUrls: ['./view-crash-row.component.css']
})
export class ViewCrashRowComponent implements OnInit {
  datosPelisMasVistas: HomeDateMovie
  css: boolean = true
  loanding: boolean = false
  constructor(
    private  homeService: HomeService
  ) {
    this.getMasVistas()
   }

  ngOnInit() {
    this.loanding = true
  }

  getMasVistas() {
    this.homeService.getPelisMasVistas().subscribe((datos) => {
      this.datosPelisMasVistas = datos
      this.loanding = false
    });
    
  }

}
