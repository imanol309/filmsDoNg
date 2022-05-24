import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-Registration',
  templateUrl: './Registration.component.html',
  styleUrls: ['./Registration.component.css'],
})
export class RegistrationComponent implements OnInit, AfterViewInit {
  @ViewChild('imgPerfil') img: ElementRef;
  formRegistre: FormGroup;
  logo: any = ['fantasma', 'extraterrestre', 'ladron', 'momia', 'muerte'];
  constructor(private fb: FormBuilder) {
    this.formRegistre = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern(
            /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          ),
        ],
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(15),
        ],
      ],
      logo: ['fantasma'],
    });
  }

  ngOnInit() {}

  ngAfterViewInit() {}
  
  eligueUno(datos) {
    this.formRegistre.controls['logo'].setValue(datos);
    console.log(this.formRegistre.get('logo').value)
  }

  registrarUsuario() {
    console.log(this.formRegistre.value)
    
  }
}
