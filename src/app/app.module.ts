import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { appRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MovieSectionsComponent } from './components/movie-sections/movie-sections.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ViewCrashComponent } from './components/view-crash/view-crash.component';
import { LoginComponent } from './components/login/login.component';
import { ModalSeekerComponent } from './components/modal-seeker/modal-seeker.component';
import { ViewCrashRowComponent } from './components/view-crash-row/view-crash-row.component';
import { MatSidenavModule } from '@angular/material/sidenav';

@NgModule({
  declarations: [AppComponent, MovieSectionsComponent, LoginComponent],
  imports: [
    BrowserModule,
    appRoutingModule,
    HttpClientModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
