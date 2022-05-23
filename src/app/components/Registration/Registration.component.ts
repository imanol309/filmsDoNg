import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-Registration',
  templateUrl: './Registration.component.html',
  styleUrls: ['./Registration.component.css']
})
export class RegistrationComponent implements OnInit {
  @ViewChild('imgPerfil') imgPerfil: ElementRef;
  constructor() { }

  ngOnInit() {
    const imgPefil =  this.imgPerfil.nativeElement
    console.log(imgPefil)
  }



}
