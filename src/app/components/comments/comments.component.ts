import {
  Component,
  ElementRef,
  Input,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { GenericService } from 'src/app/services/generic.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css'],
})
export class CommentsComponent implements OnInit {
  datosUsuario: any;
  @Input() datosComentarios: any;
  @ViewChild('richText') richText!: ElementRef;
  @ViewChild('borrar') borrar: ElementRef;
  @ViewChild('enviar') enviar: ElementRef;
  valorMessage: any;

  constructor(
    private genericService: GenericService,
    private renderer: Renderer2
  ) {
    this.datosUsuario = JSON.parse(localStorage.getItem('usuario'));
  }

  ngOnInit() {
    this.valorMessage = this.richText?.nativeElement.innerHTML;
    console.log(this.datosComentarios.comments)
  }

  publicar() {
    console.log(this.richText.nativeElement.innerHTML);
    const datosComentarios = {
      _id: this.datosComentarios._id,
      message: this.richText.nativeElement.innerHTML,
    };
    this.genericService.putAddComment(datosComentarios).subscribe((datos) => {
      this.datosComentarios = datos?.commentsNew;
      this.richText.nativeElement.innerHTML = '';
    });
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

  borrarTexto() {
    this.richText.nativeElement.innerHTML = '';
  }

  activarAnimacion() {
    this.renderer.setStyle(
      this.borrar.nativeElement,
      'display',
      'inline-block'
    );
    this.renderer.setStyle(
      this.enviar.nativeElement,
      'display',
      'inline-block'
    );
  }
}
