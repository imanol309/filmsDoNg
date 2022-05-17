import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SubSink } from 'subsink';
import { GenericService } from '../../services/generic.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit, OnDestroy {
  formLogin: FormGroup;
  subs = new SubSink();
  datosLogin;
  is_sendmail: boolean | undefined = undefined;
  constructor(private fb: FormBuilder, private genericService: GenericService) {
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

  ngOnInit() {}

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  datosForm() {
    if (!this.formLogin.valid) {
      return;
    }
    this.subs.sink = this.genericService
      .postLogin(this.formLogin.value)
      .subscribe(
        (value) => {
          this.datosLogin = value;
          this.is_sendmail = true;
          localStorage.setItem('usuario', JSON.stringify(this.datosLogin.DatosLogin));
        },
        (_error) => {
          this.is_sendmail = false;
          setInterval(() => {
            this.is_sendmail = true;
          }, 5000);
        }
      );
  }
}
