import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { GenericService } from 'src/app/services/generic.service';

@Component({
  selector: 'app-Registration',
  templateUrl: './Registration.component.html',
  styleUrls: ['./Registration.component.css'],
})
export class RegistrationComponent implements OnInit, AfterViewInit {
  @ViewChild('imgPerfil') img: ElementRef;
  formRegistre: FormGroup;
  logo: any = ['fantasma', 'extraterrestre', 'ladron', 'momia', 'muerte'];
  mensaje: String;
  constructor(
    private fb: FormBuilder,
    private genericService: GenericService,
    public dialogRef: MatDialogRef<RegistrationComponent>
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

  ngAfterViewInit() {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  eligueUno(datos) {
    this.formRegistre.controls['logo'].setValue(datos);
    console.log(this.formRegistre.get('logo').value);
  }

  registrarUsuario() {
    console.log(this.formRegistre.value);
    this.genericService
      .postRegistrarUsuario(this.formRegistre.value)
      .subscribe((datos) => {
        this.mensaje = datos?.mensaje;
        console.log(datos);
      }),
      (_error) => {
        console.log(_error);
      };
  }
}
