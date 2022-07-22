import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GenericService } from 'src/app/services/generic.service';

@Component({
  selector: 'app-signUp',
  templateUrl: './signUp.component.html',
  styleUrls: ['./signUp.component.css']
})
export class SignUpComponent implements OnInit {
  @ViewChild('imgPerfil') img: ElementRef;
  formRegistre: FormGroup;
  logo: any = ['fantasma', 'extraterrestre', 'ladron', 'momia', 'muerte'];
  mensaje: String;
  imgPerfil: any;
  link: any;
  constructor(
    private fb: FormBuilder,
    private genericService: GenericService,
  ) {
    this.formRegistre = this.fb.group({
      name: ['', [Validators.required]],
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

  eligueUno(datos) {
    this.imgPerfil = datos
    this.link = `../../../../../assets/img/perfil/${this.imgPerfil}.png`
    this.formRegistre.controls['logo'].setValue(datos);
  }

  registrarUsuario() {
    console.log(this.formRegistre.value);
    this.genericService
      .postRegistrarUsuario(this.formRegistre.value)
      .subscribe((datos) => {
        this.mensaje = datos?.mensaje;
        this.formRegistre.reset();  
        setInterval(() => {
          }, 2000);
      }),
      (_error) => {
        
        console.log(_error);
      };
  }
}
