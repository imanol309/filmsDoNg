import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from '../components/nav-bar/nav-bar.component';
import { MovieSectionsComponent } from './home/components/movie-sections/movie-sections.component';


@NgModule({
  declarations: [HomeComponent, NavBarComponent, MovieSectionsComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
