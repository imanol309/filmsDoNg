import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module'
import { HomeComponent } from './home.component';
import { MovieSectionsComponent } from 'src/app/components/movie-sections/movie-sections.component';
import { ViewCrashComponent } from 'src/app/components/view-crash/view-crash.component';
import { NavBarComponent } from 'src/app/components/nav-bar/nav-bar.component';
import { pagesModule } from '../pages.module';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    pagesModule
  ]
})
export class HomeModule { }
