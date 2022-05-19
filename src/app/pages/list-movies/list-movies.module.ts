import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListMoviesComponent } from './list-movies.component';
import { ListMoviesRoutingModule } from './list-movies-routing.module';
import { pagesModule } from '../pages.module';

@NgModule({
  imports: [
    CommonModule,
    ListMoviesRoutingModule,
    pagesModule
  ],
  declarations: [ListMoviesComponent]
})
export class ListMoviesModule { }
