import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewingMoviesRoutingModule } from './viewing-movies-routing.module';
import { ViewingMoviesComponent } from './viewing-movies.component';
import { NavBarComponent } from 'src/app/components/nav-bar/nav-bar.component';
import { MovieSectionsComponent } from 'src/app/components/movie-sections/movie-sections.component';
import { pagesModule } from '../pages.module';

@NgModule({
  declarations: [ViewingMoviesComponent],
  imports: [CommonModule, ViewingMoviesRoutingModule, pagesModule],
})
export class ViewingMoviesModule {}
