import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { appRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MovieSectionsComponent } from './components/movie-sections/movie-sections.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { LoginComponent } from './components/login/login.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatMenuModule} from '@angular/material/menu'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LogoutComponent } from './components/logout/logout.component';
import { pagesModule } from './pages/pages.module';

@NgModule({
  declarations: [
    AppComponent,
    MovieSectionsComponent,
    LoginComponent,
    NavBarComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    appRoutingModule,
    HttpClientModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    FormsModule,
    ReactiveFormsModule,
    MatMenuModule,
    pagesModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
