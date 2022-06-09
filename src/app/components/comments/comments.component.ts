import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  form: FormGroup;
  @Input() datosComentarios: any;
  constructor(private fb: FormBuilder) {
    this.form =  this.fb.group({
      message: ['', [Validators.required, Validators.maxLength(1000)]]
    })
   }

  ngOnInit() {
    console.log(this.datosComentarios)
  }

  publicar() {
    if (!this.form.valid) {
      return;
    }
  

  }

}
