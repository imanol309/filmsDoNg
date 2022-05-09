import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenreRoutingModule } from './genre-routing.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { GenreComponent } from './genre.component';
import { pagesModule } from '../pages.module';

@NgModule({
  declarations: [GenreComponent],
  imports: [
    CommonModule,
    GenreRoutingModule,
    pagesModule
  ]
})
export class GenreModule { }
