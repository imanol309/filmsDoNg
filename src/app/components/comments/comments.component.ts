import { Component, DoCheck, ElementRef, Input, OnInit, Renderer2, ViewChild } from '@angular/core';
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
  @ViewChild('borrar') borrar: ElementRef;
  @ViewChild('enviar') enviar: ElementRef;
  valorMessage: any;

  constructor(private fb: FormBuilder, private genericService: GenericService, private renderer: Renderer2) {
    this.form = this.fb.group({
      message: ['', [Validators.required, Validators.maxLength(1000)]],
    });
    this.datosUsuario = JSON.parse(localStorage.getItem('usuario'));
  }

  ngOnInit() {
    this.valorMessage = this.richText?.nativeElement.innerHTML
  }

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

  activarAnimacion() {
    this.renderer.addClass(this.borrar.nativeElement, 'ver')
    this.renderer.addClass(this.enviar.nativeElement, 'ver')
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
