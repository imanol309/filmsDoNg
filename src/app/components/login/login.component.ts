import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SubSink } from 'subsink';
import { GenericService } from '../../services/generic.service';
import { RegistrationComponent } from '../Registration/Registration.component';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit, OnDestroy {
  formLogin: FormGroup;
  subs = new SubSink();
  datosLogin;
  datoUsuario;
  is_sendmail: boolean | undefined = undefined;
  rutaImg;
  constructor(
    private fb: FormBuilder,
    private genericService: GenericService,
    private matDialog: MatDialog
  ) {
    this.formLogin = this.fb.group({
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
    });
  }

  ngOnInit() {
    this.datoUsuario = JSON.parse(localStorage.getItem('usuario'));
    const img = this.datoUsuario?.logo;
    this.rutaImg = `../../../../../assets/img/perfil/${img}.png`;
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  eliminarDatos() {
    localStorage.removeItem('usuario');
    localStorage.removeItem('Token');
    localStorage.removeItem('Formulario');
    location.reload();
  }

  datosForm() { 
    this.is_sendmail = true;
    if (!this.formLogin.valid) {
      return;
    }
    this.subs.sink = this.genericService
      .postLogin(this.formLogin.value)
      .subscribe(
        (value) => {
          this.datosLogin = value;
          console.log(value)
          this.is_sendmail = true;
          localStorage.setItem(
            'usuario',
            JSON.stringify(this.datosLogin.DatosLogin)
          );
          localStorage.setItem(
            'Formulario',
            JSON.stringify(this.formLogin.value)
          );
          localStorage.setItem(
            'Token',
            JSON.stringify(this.datosLogin.DatosLogin.password)
          );
          setInterval(() => {
            this.formLogin.reset();  
            location.reload();
          }, 1000);
        },
        async (_error) => {
          this.formLogin.get('password').reset();  
          this.is_sendmail = false;
        }
      );
  }
}
