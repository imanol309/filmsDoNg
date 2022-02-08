import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './home/components/nav-bar/nav-bar.component';
import { CarouselComponent } from './home/components/carousel/carousel.component';


@NgModule({
  declarations: [HomeComponent, NavBarComponent, CarouselComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
