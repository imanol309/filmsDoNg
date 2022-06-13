import { Component, DoCheck, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GenericService } from 'src/app/services/generic.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css'],
})
export class CommentsComponent implements OnInit, DoCheck {
  form: FormGroup;
  datosUsuario: any;
  @Input() datosComentarios: any;
  @ViewChild('richText') richText!: ElementRef;

  constructor(private fb: FormBuilder, private genericService: GenericService) {
    this.form = this.fb.group({
      message: ['', [Validators.required, Validators.maxLength(1000)]],
    });
    this.datosUsuario = JSON.parse(localStorage.getItem('usuario'));
  }

  ngOnInit() {}

  ngDoCheck() {
    this.form.controls['message'].setValue(this.richText?.nativeElement.innerHTML)
    console.log(this.richText?.nativeElement.innerHTML)
  }

  publicar() {
    console.log(this.richText?.nativeElement.innerHTML);
    // const datosComentarios = {
    //   _id: this.datosComentarios._id,
    //   message: this.form.controls['message'].value,
    // };
    // this.genericService.putAddComment(datosComentarios).subscribe((datos) => {
    //   this.datosComentarios = datos?.commentsNew;
    //   this.form.reset();
    // });
  }

  eliminarComentario(idComment) {
    const datosComentarios = {
      _id: this.datosComentarios?._id,
      _idComment: idComment,
    };
    this.genericService.deleteComment(datosComentarios).subscribe((datos) => {
      this.datosComentarios = datos?.moviesNew;
    });
  }
}
