import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-Registration',
  templateUrl: './Registration.component.html',
  styleUrls: ['./Registration.component.css'],
})
export class RegistrationComponent implements OnInit, AfterViewInit {
  @ViewChild('imgPerfil') img: ElementRef;
  logo: any = ['fantasma', 'extraterrestre', 'ladron', 'momia', 'muerte'];
  constructor(private renderer: Renderer2) {}

  ngOnInit() {}

  ngAfterViewInit() {}

  click(d) {
    console.log(d);
    // console.log(this.img.nativeElement.src.split('/')[6])
    // this.renderer.addClass(this.img.nativeElement, "logoBlanco");
  }
}
