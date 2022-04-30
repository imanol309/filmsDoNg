import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { pagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from '../components/nav-bar/nav-bar.component';
import { MovieSectionsComponent } from '../components/movie-sections/movie-sections.component';
import { ViewingMoviesComponent } from './viewing-movies/viewing-movies.component';
import { GenreComponent } from './genre/genre.component';
import { ViewCrashComponent } from '../components/view-crash/view-crash.component';

@NgModule({
  declarations: [
    HomeComponent,
    NavBarComponent,
    MovieSectionsComponent,
    ViewingMoviesComponent,
    GenreComponent,
    ViewCrashComponent
  ],
  imports: [CommonModule, pagesRoutingModule],
})
export class pagesModule {}
