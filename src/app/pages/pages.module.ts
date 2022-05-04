import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { pagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from '../components/nav-bar/nav-bar.component';
import { MovieSectionsComponent } from '../components/movie-sections/movie-sections.component';
import { ViewingMoviesComponent } from './viewing-movies/viewing-movies.component';
import { GenreComponent } from './genre/genre.component';
import { ViewCrashComponent } from '../components/view-crash/view-crash.component';
import { ModalSeekerComponent } from '../components/modal-seeker/modal-seeker.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    HomeComponent,
    NavBarComponent,
    MovieSectionsComponent,
    ViewingMoviesComponent,
    GenreComponent,
    ViewCrashComponent,
    ModalSeekerComponent
  ],
  imports: [CommonModule, pagesRoutingModule, FormsModule],
})
export class pagesModule {}
