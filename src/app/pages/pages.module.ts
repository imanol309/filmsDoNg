import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { pagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from '../components/nav-bar/nav-bar.component';
import { MovieSectionsComponent } from '../components/movie-sections/movie-sections.component';
import { ViewingMoviesComponent } from './viewing-movies/viewing-movies.component';
import { GenreComponent } from './genre/genre.component';
import { ViewCrashComponent } from '../components/view-crash/view-crash.component';
import { ModalSeekerComponent } from '../components/modal-seeker/modal-seeker.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MoreViewComponent } from './more-view/more-view.component';
import { ViewCrashRowComponent } from '../components/view-crash-row/view-crash-row.component';
import { LoginComponent } from '../components/login/login.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SpinnerLoadingComponent } from '../components/spinner-loading/spinner-loading.component';
import { SafePipe } from '../pipe/seguridad-url.pipe';
import { RegistrationComponent } from '../components/Registration/Registration.component';
import { FooterComponent } from '../components/footer/footer.component';

@NgModule({
  declarations: [
    ViewCrashComponent,
    ModalSeekerComponent,
    ViewCrashRowComponent,
    SpinnerLoadingComponent,
    SafePipe,
    RegistrationComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    pagesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatSidenavModule,
  ],
  exports: [
    ViewCrashComponent,
    ModalSeekerComponent,
    ViewCrashRowComponent,
    MatSidenavModule,
    SpinnerLoadingComponent,
    SafePipe,
    RegistrationComponent,
    FooterComponent
  ],
})
export class pagesModule {}
